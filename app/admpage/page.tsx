"use client";
import { useEffect, useState } from 'react';
import { getInquiries, submitToNewTable, updateInquiry, deleteInquiry } from '@/actions/inquiryActions';
import { Inquiry } from '@prisma/client';
import Image from 'next/image';

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [updatedSubject, setUpdatedSubject] = useState('');
  const [updatedContent, setUpdatedContent] = useState('');

  useEffect(() => {
    async function fetchData() {
      const data = await getInquiries();
      setInquiries(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleEdit = (inquiry: Inquiry) => {
    setEditingId(inquiry.id);
    setUpdatedSubject(inquiry.subject);
    setUpdatedContent(inquiry.content);
  };

  const handleSubmitUpdate = async () => {
    if (editingId === null) return;

    try {
      // Update the inquiry
      await updateInquiry(editingId, {
        subject: updatedSubject,
        content: updatedContent,
      });

      // Submit updated information to the `Submitted` table
      await submitToNewTable(editingId);

      // Refresh the inquiries list
      const data = await getInquiries();
      setInquiries(data);
      setEditingId(null);
      setUpdatedSubject('');
      setUpdatedContent('');
    } catch (error) {
      console.error('Error updating inquiry:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteInquiry(id);
      const data = await getInquiries();
      setInquiries(data);
    } catch (error) {
      console.error('Error deleting inquiry:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inquiries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {inquiries.map((inquiry) => (
          <div key={inquiry.id} className="border rounded-lg p-4 shadow-md">
            {editingId === inquiry.id ? (
              <div>
                <input
                  type="text"
                  value={updatedSubject}
                  onChange={(e) => setUpdatedSubject(e.target.value)}
                  placeholder="Update subject"
                  className="mb-2 p-1 border rounded"
                />
                <textarea
                  value={updatedContent}
                  onChange={(e) => setUpdatedContent(e.target.value)}
                  placeholder="Update content"
                  className="mb-2 p-1 border rounded w-full"
                />
                <button
                  onClick={handleSubmitUpdate}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit Update
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold mb-2">{inquiry.subject}</h2>
                <p><strong>Full Name:</strong> {inquiry.fullName}</p>
                <p><strong>Phone Number:</strong> {inquiry.phoneNumber}</p>
                <p><strong>Email:</strong> {inquiry.email}</p>
                <p><strong>Content:</strong> {inquiry.content}</p>
                {inquiry.requestImageUrl && (
                  <div>
                    <strong>Image:</strong>
                    <Image
                      src={inquiry.requestImageUrl}
                      alt="Uploaded Image"
                      width={400} // Specify the width
                      height={300} // Specify the height
                      className="mt-2"
                    />
                  </div>
                )}
                <button
                  onClick={() => handleEdit(inquiry)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(inquiry.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-2"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
