
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import InsightsPage from './pages/InsightsPage.jsx';
import HrPeersPage from './pages/HrPeersPage.jsx';
import ArticlesPage from './pages/ArticlesPage.jsx';
import ArticleDetailPage from './pages/ArticleDetailPage.jsx';
import AIToolsPage from './pages/AIToolsPage.jsx';
import AIToolDetailPage from './pages/AIToolDetailPage.jsx';
import CompetitorDynamicsPage from './pages/CompetitorDynamicsPage.jsx';
import CompetitorDetailPage from './pages/CompetitorDetailPage.jsx';
import LabNewsPage from './pages/LabNewsPage.jsx';
import LabNewsDetailPage from './pages/LabNewsDetailPage.jsx';
import AIActivitiesPage from './pages/AIActivitiesPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AdminArticlesPage from './pages/AdminArticlesPage.jsx';
import DebugPDFFixPage from './pages/DebugPDFFixPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { Toaster } from 'sonner';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin/articles" element={
              <ProtectedRoute>
                <AdminArticlesPage />
              </ProtectedRoute>
            } />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/hr-peers" element={<HrPeersPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/article/:id" element={<ArticleDetailPage />} />
            <Route path="/ai-tools" element={<AIToolsPage />} />
            <Route path="/ai-tools/:toolId" element={<AIToolDetailPage />} />
            <Route path="/competitors" element={<CompetitorDynamicsPage />} />
            <Route path="/competitor-dynamics" element={<CompetitorDynamicsPage />} />
            <Route path="/competitor/:id" element={<CompetitorDetailPage />} />
            <Route path="/lab-news" element={<LabNewsPage />} />
            <Route path="/lab-news/:id" element={<LabNewsDetailPage />} />
            <Route path="/ai-activities" element={<AIActivitiesPage />} />
            
            {/* Debug Routes */}
            <Route path="/debug/pdf-fix" element={<DebugPDFFixPage />} />

            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
                <div className="text-center">
                  <h1 className="text-5xl font-bold mb-4">404</h1>
                  <p className="text-muted-foreground mb-8 text-lg">The page you're looking for doesn't exist.</p>
                  <a href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    Back to home
                  </a>
                </div>
              </div>
            } />
          </Routes>
          <Toaster position="bottom-right" richColors />
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
