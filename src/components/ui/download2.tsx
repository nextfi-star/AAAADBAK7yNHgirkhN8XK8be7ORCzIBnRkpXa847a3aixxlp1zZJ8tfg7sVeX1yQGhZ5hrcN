interface Props {
  color: string
}
export const Download2 = ({ color }: Props) => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.5652 33H12.4348C11.6437 33 11 32.38 11 31.6182V11.0019H13.9729C14.3465 11.0019 14.3814 11.2411 14.3814 11.439C14.3814 11.788 14.1111 11.8123 13.9729 11.8122H11.9565V31.6182C11.9565 31.8715 12.1708 32.0788 12.4348 32.0788H31.5652C31.8292 32.0788 32.0435 31.8715 32.0435 31.6182V11.8122H30.313C29.9125 11.8122 29.6361 11.7222 29.6361 11.3689C29.6361 11.0457 29.9602 10.9999 30.313 11H33V31.6182C33 32.38 32.3563 33 31.5652 33ZM22.4761 27.7501V11.4598C22.4761 11.2071 22.2618 11.002 21.9978 11.002C21.7338 11.002 21.5195 11.2071 21.5195 11.4598V27.7348L16.6052 23.0019C16.4187 22.8223 16.1155 22.8223 15.929 23.0019C15.7424 23.1815 15.7424 23.4736 15.929 23.6532L21.6079 29.1225C21.6947 29.2391 21.837 29.3152 21.9978 29.3152C22.0043 29.3152 22.0108 29.3151 22.0172 29.3148C22.1361 29.3123 22.2542 29.2672 22.3434 29.1804L28.0825 23.6532C28.269 23.4736 28.269 23.1815 28.0825 23.0019C27.896 22.8223 27.5928 22.8223 27.4063 23.0019L22.4761 27.7501Z"
        fill={color}
      />
    </svg>
  );
};
