import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Calendar, Image as ImageIcon, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import pb from '@/lib/pocketbaseClient.js';
import { toast } from 'sonner';

export default function ArticleForm({ article, onSuccess, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    author: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
  });
  
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (article) {
      setFormData({
        title: article.title || '',
        content: article.content || '',
        category: article.category || '',
        author: article.author || '',
        description: article.description || '',
        date: article.date ? article.date.split(' ')[0] : new Date().toISOString().split('T')[0],
      });
      if (article.featured_image) {
        setFilePreview(pb.files.getUrl(article, article.featured_image));
      }
    }
  }, [article]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (content) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilePreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      toast.error('Title and content are required');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      
      if (file) {
        data.append('featured_image', file);
      }

      let savedArticle;
      if (article?.id) {
        savedArticle = await pb.collection('articles').update(article.id, data, { $autoCancel: false });
        toast.success('Article updated successfully');
      } else {
        savedArticle = await pb.collection('articles').create(data, { $autoCancel: false });
        toast.success('Article created successfully');
      }
      
      onSuccess(savedArticle);
    } catch (err) {
      console.error('Save error:', err);
      toast.error(err.message || 'Failed to save article');
    } finally {
      setIsSubmitting(false);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card text-card-foreground p-6 rounded-xl border border-border shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Title *</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full bg-background border border-border rounded-md px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Enter article title"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Excerpt / Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full bg-background border border-border rounded-md px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              placeholder="Brief summary for cards and SEO"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Content *</label>
            <div className="bg-background rounded-md overflow-hidden border border-border">
              <ReactQuill 
                theme="snow" 
                value={formData.content} 
                onChange={handleContentChange}
                modules={modules}
                className="h-64 mb-10"
              />
            </div>
          </div>
        </div>

        {/* Sidebar Metadata Area */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Featured Image</label>
            <div 
              className="border-2 border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/50 transition-colors relative overflow-hidden group"
              onClick={() => fileInputRef.current?.click()}
            >
              {filePreview ? (
                <div className="relative w-full aspect-video">
                  <img src={filePreview} alt="Preview" className="w-full h-full object-cover rounded-md" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Click to change</span>
                  </div>
                </div>
              ) : (
                <div className="py-6 flex flex-col items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <ImageIcon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Upload Image</span>
                  <span className="text-xs text-muted-foreground mt-1">JPEG, PNG, WEBP max 20MB</span>
                </div>
              )}
              <input 
                type="file" 
                ref={fileInputRef}
                className="hidden" 
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-md px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="e.g. Research, News"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Author</label>
            <input
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-md px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Author name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Publish Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-background border border-border rounded-md pl-10 pr-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-6 border-t border-border">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
          disabled={isSubmitting}
        >
          <X className="w-4 h-4 mr-2" />
          Cancel
        </Button>
        <Button 
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
          ) : (
            <Save className="w-4 h-4 mr-2" />
          )}
          {article ? 'Update Article' : 'Create Article'}
        </Button>
      </div>
    </form>
  );
}