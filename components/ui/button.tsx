import { ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from 'react'
import React from 'react'; // Added import for React

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  arrow?: boolean
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, className, arrow = true, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          "px-8 py-4 rounded-full",
          "bg-[#9333EA] hover:bg-[#7E22CE]",
          "text-white font-medium text-base",
          "transition-all duration-200 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {arrow && <ArrowRight className="ml-2 h-5 w-5" />}
      </button>
    )
  }
)
CustomButton.displayName = 'CustomButton'

export { CustomButton }