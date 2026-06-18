import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center bg-[#FAF9F6]">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">Oops, something went wrong</h1>
          <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg">
            We're sorry, an unexpected error occurred. Please try refreshing the page or navigating back to home.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 border-2 border-brand-dark text-brand-dark font-bold rounded-xl hover:bg-brand-dark hover:text-white transition-colors"
            >
              Refresh Page
            </button>
            <a 
              href="/"
              className="btn-solar-orange px-6 py-3 text-base font-bold uppercase tracking-wide inline-flex items-center"
            >
              Go to Home
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
