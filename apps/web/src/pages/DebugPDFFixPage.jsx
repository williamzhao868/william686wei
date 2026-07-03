import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Trash2, ArrowLeft, Bug, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import apiServerClient from '@/lib/apiServerClient.js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

const DebugPDFFixPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleFixPDFs = async () => {
    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await apiServerClient.fetch('/fix-pdf-filenames', {
        method: 'POST'
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || 'An error occurred during the operation.');
      }

      setResults(data);
    } catch (err) {
      console.error('Debug UI Error:', err);
      setError(err.message || 'Failed to connect to the API server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setResults(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div>
            <Link 
              to="/" 
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
              <Bug className="w-8 h-8 text-primary" />
              PDF Filename Fix Tool
            </h1>
            <p className="text-muted-foreground mt-2">
              Debug interface to manually trigger the PDF filename correction script.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={handleClear}
              disabled={isLoading || (!results && !error)}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Results
            </Button>
            <Button 
              onClick={handleFixPDFs} 
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                  Processing...
                </span>
              ) : (
                <span className="flex items-center">
                  <Play className="w-4 h-4 mr-2" />
                  Fix PDF Filenames Now
                </span>
              )}
            </Button>
          </div>
        </motion.div>

        {/* Error State */}
        {error && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <Card className="border-destructive/50 bg-destructive/10">
              <CardContent className="flex items-start gap-4 pt-6">
                <AlertCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-destructive">Operation Failed</h3>
                  <p className="text-sm text-destructive/80 mt-1">{error}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Results State */}
        {results && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* Overview Card */}
            <Card className="lg:col-span-1 h-fit">
              <CardHeader>
                <CardTitle className="text-lg">Execution Summary</CardTitle>
                <CardDescription>High-level results from the script</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge variant={results.success ? 'default' : 'destructive'} className="flex items-center gap-1">
                    {results.success ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                    {results.success ? 'Success' : 'Failed'}
                  </Badge>
                </div>
                
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Records Updated</span>
                  <div className="text-4xl font-bold font-mono">
                    {results.updatedCount !== undefined ? results.updatedCount : 
                     (results.updatedRecords?.length || 0)}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Message</span>
                  <p className="text-sm font-medium">{results.message || 'Completed successfully.'}</p>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Results */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Detailed Records</CardTitle>
                <CardDescription>Breakdown of updated items</CardDescription>
              </CardHeader>
              <CardContent>
                {results.updatedRecords && results.updatedRecords.length > 0 ? (
                  <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                    <div className="space-y-4">
                      {results.updatedRecords.map((record, idx) => (
                        <div key={record.id || idx} className="flex flex-col gap-2 p-3 bg-muted rounded-lg border">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm flex items-center gap-2">
                              <FileText className="w-4 h-4 text-primary" />
                              {record.toolName || record.title || 'Unknown Tool'}
                            </span>
                            <span className="text-xs text-muted-foreground font-mono bg-background px-2 py-1 rounded">
                              ID: {record.id}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                            <div className="space-y-1">
                              <span className="text-muted-foreground block">Old Filename:</span>
                              <span className="font-mono text-destructive/80 break-all bg-destructive/10 px-1.5 py-0.5 rounded block">
                                {record.oldFileName || 'None'}
                              </span>
                            </div>
                            <div className="space-y-1">
                              <span className="text-muted-foreground block">New Filename:</span>
                              <span className="font-mono text-primary/80 break-all bg-primary/10 px-1.5 py-0.5 rounded block">
                                {record.newFileName || record.pdfFileName || 'None'}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center bg-muted/50 rounded-lg border border-dashed">
                    <CheckCircle2 className="w-10 h-10 text-muted-foreground mb-3 opacity-50" />
                    <p className="text-muted-foreground font-medium">No records needed updating.</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">All PDF filenames are already correct.</p>
                  </div>
                )}

                {/* Raw JSON Debug */}
                <div className="mt-6">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    Raw JSON Response
                  </h4>
                  <ScrollArea className="h-[200px] w-full rounded-md border bg-zinc-950 p-4">
                    <pre className="text-xs text-zinc-300 font-mono whitespace-pre-wrap">
                      {JSON.stringify(results, null, 2)}
                    </pre>
                  </ScrollArea>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DebugPDFFixPage;