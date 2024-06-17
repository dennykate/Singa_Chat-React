import { Button } from "@/components/ui/button";
import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
          <div className="sm:w-[500px]">
            <img
              src="/assets/images/error-page.png"
              alt="error-page"
              className="w-full object-cover"
            />
          </div>
          <Button
            onClick={() => {
              window.location.reload();
            }}
            className="bg-primary-800 hover:bg-primary-900 w-[120px]"
          >
            Restart Now
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
