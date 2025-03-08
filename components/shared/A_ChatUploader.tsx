import { useUserStore } from '@/hooks/useUserData'
import { uploadChatFile } from '@/utils/api'
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
			onFileUploaded(result.filename) // 🔥 Передаем имя файла в `A_Chat.tsx`
		} else {
			setError(result?.message || 'Ошибка загрузки файла')
		}

		setUploading(false)
	}

	return (
		<div>
			<label className='relative cursor-pointer'>
				<input
					type='file'
					ref={fileInputRef}
					className='hidden'
					accept='image/png, image/jpeg, image/webp'
					onChange={handleFileChange}
				/>

				<Images
					className='bg-transparent absolute top-[11px] left-[17px] max-w-[32px] w-full cursor-pointer'
					strokeWidth={1}
				/>
			</label>
			<button
				className='bg-transparent text-white py-2 rounded-md'
				onClick={() => fileInputRef.current?.click()}
				disabled={uploading}
			>
				{uploading ? (
					'Загрузка...'
				) : (
					<Images
						className='bg-transparent absolute top-[11px] left-[17px] max-w-[32px] w-full cursor-pointer'
						strokeWidth={1}
					/>
				)}
			</button>

			{error && <p className='text-red-500 mt-2'>{error}</p>}
		</div>
	)
}
