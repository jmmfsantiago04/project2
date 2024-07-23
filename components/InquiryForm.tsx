'use client';

import React, { useState } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CldUploadWidget } from 'next-cloudinary';
import { submitInquiry } from '@/actions/submitInquiry';

const formSchema = z.object({
  fullName: z.string().min(1, 'Please enter your full name'),
  phoneNumber: z.string().min(1, 'Please enter your phone number'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Please enter a subject'),
  content: z.string().min(1, 'Please enter content'),
  requestImageUrl: z.string().optional(),
  requestImagePublicId: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

export default function InquiryForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      subject: '',
      content: '',
      requestImageUrl: '',
      requestImagePublicId: '',
    },
  });

  const handleSubmit = async (values: FormSchema) => {
    setIsLoading(true);
    setIsSuccess(false);
    setErrorMessage(null);

    try {
      const formData = { ...values };
      console.log('Form data to be submitted:', formData);
      await submitInquiry(formData);
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('There was an error submitting the form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center my-12 lg:my-24">
          견적신청/문의하기
        </h2>
      </div>
      <div className="flex justify-center px-4 md:px-8 lg:px-12 desktop:px-24 pb-12 lg:pb-24 max-w-7xl mx-auto space-y-12">
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-center align-center">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>성함</FormLabel>
                  <FormControl>
                    <Input placeholder="성함을 입력해주세요." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>전화번호</FormLabel>
                  <FormControl>
                    <Input placeholder="전화번호를 입력해주세요." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input placeholder="이메일을 입력해주세요." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>제목</FormLabel>
                <FormControl>
                  <Input placeholder="제목을 입력해주세요." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>내용</FormLabel>
                <FormControl>
                  <Textarea placeholder="내용을 입력해주세요." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem>
            <FormLabel>사진 첨부</FormLabel>
            <FormControl>
              <CldUploadWidget
                uploadPreset="projectImage"
                options={{
                  sources: ["local", "camera"],
                  resourceType: "image",
                  clientAllowedFormats: ["jpg", "png", "jpeg", "webp", "gif", "avif"],
                  maxFiles: 1,
                  multiple: false,
                  language: "en",
                  text: {
                    ko: {
                      menu: {
                        files: "Files",
                        camera: "Camera",
                      },
                      local: {
                        browse: "Browse",
                        dd_title_single: "Drag and drop your photo here",
                      },
                    },
                  },
                }}
                onSuccess={async (result: any) => {
                  form.setValue("requestImageUrl", result.info.url);
                  form.setValue("requestImagePublicId", result.info.public_id);
                }}
                onError={() => {
                  return alert("Photo upload failed.");
                }}
              >
                {({ open }) => (
                  <Button
                    className="whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-[250px] h-[150px] bg-slate-300 flex items-center justify-center text-black font-bold hover:bg-slate-300/60 flex-col gap-2"
                    type="button"
                    onClick={() => open()}
                  >
                    
                    사진 첨부
                  </Button>
                )}
              </CldUploadWidget>
            </FormControl>
          </FormItem>
          {form.watch('requestImageUrl') && (
            <div>
              <p>Uploaded Image URL: <a href={form.watch('requestImageUrl')} target="_blank" rel="noopener noreferrer">{form.watch('requestImageUrl')}</a></p>
            </div>
          )}
          {isLoading && <p>Loading...</p>}
          {isSuccess && <p className="text-green-600">Form submitted successfully!</p>}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Submitting...' : '제출하기'}
          </Button>
        </form>
      </div>
    </Form>
  );
}
