"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface WeChatQRDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WeChatQRDialog({ open, onOpenChange }: WeChatQRDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-gray-800">
            扫码添加微信咨询
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            扫描下方二维码,添加微信好友进行免费咨询
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center p-6">
          <div className="relative w-64 h-64 bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/wechat-qr.jpg"
              alt="微信二维码"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            长按识别二维码或保存图片后使用微信扫一扫
          </p>
          <div className="mt-4 flex items-center gap-2 text-red-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.5 3h-17A1.5 1.5 0 002 4.5v15A1.5 1.5 0 003.5 21h17a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0020.5 3zm-17 0h17a.5.5 0 01.5.5V16l-4-4-3.5 3.5-3-3L4 16V4.5a.5.5 0 01.5-.5z"/>
            </svg>
            <span className="text-lg font-semibold">咨询热线: 13728777024</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
