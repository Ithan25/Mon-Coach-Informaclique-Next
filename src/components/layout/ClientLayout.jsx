'use client'

import CustomCursor from '@/components/ui/CustomCursor'

export default function ClientLayout({ children }) {
    return (
        <>
            <CustomCursor />
            {children}
        </>
    )
}
