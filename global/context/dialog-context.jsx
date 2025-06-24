// ui/global/dialog/GlobalDialogProvider.js
import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '~/components/ui/dialog';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';

const GlobalDialogContext = createContext();

export const GlobalDialogProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [dialogData, setDialogData] = useState({
    title: '',
    description: '',
    content: null,
    footer: null,
  });

  const openDialog = useCallback(({ title, description, content, footer }) => {
    setDialogData({ title, description, content, footer });
    setVisible(true);
  }, []);

  const closeDialog = useCallback(() => {
    setVisible(false);
    setDialogData({
      title: '',
      description: '',
      content: null,
      footer: null,
    });
  }, []);

  return (
    <GlobalDialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      <Dialog open={visible} onOpenChange={setVisible}>
        <DialogContent >
          <DialogHeader>
            <DialogTitle>{dialogData.title}</DialogTitle>
            {dialogData.description && (
              <DialogDescription>{dialogData.description}</DialogDescription>
            )}
          </DialogHeader>

          {dialogData.content}

          <DialogFooter>
            {dialogData.footer ? (
              dialogData.footer
            ) : (
              <DialogClose asChild>
                <Button>
                  <Text>Close</Text>
                </Button>
              </DialogClose>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </GlobalDialogContext.Provider>
  );
};

export const useGlobalDialog = () => useContext(GlobalDialogContext);
