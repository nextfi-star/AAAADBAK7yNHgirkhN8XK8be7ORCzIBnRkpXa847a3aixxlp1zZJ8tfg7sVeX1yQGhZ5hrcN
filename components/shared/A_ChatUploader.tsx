import { useUserStore } from '@/hooks/useUserData'
import { uploadChatFile } from '@/utils/api'
import { Spinner } from '@heroui/spinner'
import { Images } from 'lucide-react'
import { useState, useRef } from 'react'

export default function A_ChatUploader({
	onFileUploaded,
}: {
	onFileUploaded: (filename: string) => void
}) {
	const user = useUserStore(state => state.user)
	const fileInputRef = useRef<HTMLInputElement>(null)
	const [uploading, setUploading] = useState(false)
	const [error, setError] = useState('')

	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (!event.target.files?.length || !user?.csrf) return
		const file = event.target.files[0]
		setUploading(true)
		setError('')
		const result = await uploadChatFile(user.csrf, file)
		if (result?.response === 'success') {
			onFileUploaded(result.filename) 
		} else {
			setError(result?.message || 'Ошибка загрузки файла')
		}
		setUploading(false)
	}

	return (
		<>
			<label className='relative z-[999999] cursor-pointer'>
				<input
					type='file'
					ref={fileInputRef}
					className='hidden'
					accept='image/png, image/jpeg, image/webp'
					onChange={handleFileChange}
				/>
				<button
					className='bg-transparent text-white py-[4px] rounded-md'
					onClick={() => fileInputRef.current?.click()}
					disabled={uploading}
				>
					{uploading ? (
						<Spinner />
					) : (
						<Images
							className='bg-transparent max-w-[32px] w-full cursor-pointer'
							strokeWidth={1}
						/>
					)}
				</button>
			</label>

			{error && <p className='text-red-500 mt-2'>{error}</p>}
		</>
	)
}
