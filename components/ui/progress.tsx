'use client'
import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '@/lib/utils'
const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
	<ProgressPrimitive.Root
		ref={ref}
		className={cn(
			'relative h-[64px] w-full overflow-hidden rounded-[5px] bg-primary/20',
			className
		)}
		{...props}
	>
		<ProgressPrimitive.Indicator
			className='h-full w-full flex-1 bg-[#3F7EF3] transition-all duration-300'
			style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
		/>
	</ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
