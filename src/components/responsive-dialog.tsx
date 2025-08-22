"use client";
import { 
    Dialog,
    DialogContent, 
    DialogTitle, 
    DialogHeader, 
    DialogDescription }
from '@/components/ui/dialog';

import { 
    Drawer, 
    DrawerContent, 
    DrawerHeader, DrawerTitle, 
    DrawerDescription } 
from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';



interface ResponsiveDialogProps {
    title: string;
    description: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
}


export const ResponsiveDialog: React.FC<ResponsiveDialogProps> = ({
    title,
    description,
    open,
    onOpenChange,
    children
}) => {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Drawer open={open} onOpenChange={onOpenChange}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{title}</DrawerTitle>
                        <DrawerDescription>{description}</DrawerDescription>
                    </DrawerHeader>
                    {children}
                </DrawerContent>
            </Drawer>
        );
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}