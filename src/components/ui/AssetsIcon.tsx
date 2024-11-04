interface Props {
	width: number
	color: string
}
const AssetsIcon = ({ width = 22, color }: Props) => {
	return (
		<svg
			width={width}
			height='19'
			viewBox='0 0 22 19'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M18.7917 18.5293H3.20833C1.43917 18.5293 0 17.0419 0 15.2135V3.84509C0 2.01667 1.43917 0.529297 3.20833 0.529297H18.7917C20.5608 0.529297 22 2.01667 22 3.84509V15.2135C22 17.0419 20.5608 18.5293 18.7917 18.5293ZM3.20833 1.47667C1.94425 1.47667 0.916667 2.53961 0.916667 3.84509V15.2135C0.916667 16.519 1.94425 17.5819 3.20833 17.5819H18.7917C20.0557 17.5819 21.0833 16.519 21.0833 15.2135V3.84509C21.0833 2.53961 20.0557 1.47667 18.7917 1.47667H3.20833Z'
				fill={color}
			/>
			<path
				d='M17.875 10.9515C17.1169 10.9515 16.5 10.3139 16.5 9.53043C16.5 8.74695 17.1169 8.10938 17.875 8.10938C18.6331 8.10938 19.25 8.74695 19.25 9.53043C19.25 10.3139 18.6331 10.9515 17.875 10.9515ZM17.875 9.05674C17.6229 9.05674 17.4167 9.26895 17.4167 9.53043C17.4167 9.7919 17.6229 10.0041 17.875 10.0041C18.1271 10.0041 18.3333 9.7919 18.3333 9.53043C18.3333 9.26895 18.1271 9.05674 17.875 9.05674Z'
				fill={color}
			/>
			<path
				d='M21.5391 12.8464H17.8724C16.1032 12.8464 14.6641 11.3591 14.6641 9.53063C14.6641 7.70221 16.1032 6.21484 17.8724 6.21484H21.5391C21.7921 6.21484 21.9974 6.42705 21.9974 6.68853V12.3727C21.9974 12.6342 21.7921 12.8464 21.5391 12.8464ZM17.8724 7.16221C16.6083 7.16221 15.5807 8.22516 15.5807 9.53063C15.5807 10.8361 16.6083 11.8991 17.8724 11.8991H21.0807V7.16221H17.8724Z'
				fill={color}
			/>
		</svg>
	)
}

export default AssetsIcon
