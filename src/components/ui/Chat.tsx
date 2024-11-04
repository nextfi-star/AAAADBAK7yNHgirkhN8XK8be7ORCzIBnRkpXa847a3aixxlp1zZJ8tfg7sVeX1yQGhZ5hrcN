interface Props {
  color: string
  width: number
  height: number
}
export const Chat = ({ color, width, height }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_2_1665" fill={color}>
        <path d="M7 5.66699C6.44867 5.66699 6 6.11499 6 6.66699C6 7.21833 6.44867 7.66699 7 7.66699C7.55133 7.66699 8 7.21833 8 6.66699C8 6.11499 7.55133 5.66699 7 5.66699ZM7 7.00033C6.816 7.00033 6.66667 6.85099 6.66667 6.66699C6.66667 6.48299 6.816 6.33366 7 6.33366C7.184 6.33366 7.33333 6.48299 7.33333 6.66699C7.33333 6.85099 7.184 7.00033 7 7.00033Z" />
      </mask>
      <path
        d="M7 5.66699C6.44867 5.66699 6 6.11499 6 6.66699C6 7.21833 6.44867 7.66699 7 7.66699C7.55133 7.66699 8 7.21833 8 6.66699C8 6.11499 7.55133 5.66699 7 5.66699ZM7 7.00033C6.816 7.00033 6.66667 6.85099 6.66667 6.66699C6.66667 6.48299 6.816 6.33366 7 6.33366C7.184 6.33366 7.33333 6.48299 7.33333 6.66699C7.33333 6.85099 7.184 7.00033 7 7.00033Z"
        fill={color}
      />
      <path
        d="M7 4.66699C5.89682 4.66699 5 5.56227 5 6.66699H7V4.66699ZM5 6.66699C5 7.77061 5.89638 8.66699 7 8.66699V6.66699H5ZM7 8.66699C8.10362 8.66699 9 7.77061 9 6.66699H7V8.66699ZM9 6.66699C9 5.56227 8.10318 4.66699 7 4.66699V6.66699H9ZM7 6.00033C7.36828 6.00033 7.66667 6.29871 7.66667 6.66699H5.66667C5.66667 7.40328 6.26372 8.00033 7 8.00033V6.00033ZM7.66667 6.66699C7.66667 7.03528 7.36828 7.33366 7 7.33366V5.33366C6.26372 5.33366 5.66667 5.93071 5.66667 6.66699H7.66667ZM7 7.33366C6.63172 7.33366 6.33333 7.03528 6.33333 6.66699H8.33333C8.33333 5.93071 7.73628 5.33366 7 5.33366V7.33366ZM6.33333 6.66699C6.33333 6.29871 6.63172 6.00033 7 6.00033V8.00033C7.73628 8.00033 8.33333 7.40328 8.33333 6.66699H6.33333Z"
        fill={color}
        mask="url(#path-1-inside-1_2_1665)"
      />
      <path
        d="M11.7812 5.66699C11.2299 5.66699 10.7812 6.11566 10.7812 6.66699C10.7812 7.21833 11.2299 7.66699 11.7812 7.66699C12.3326 7.66699 12.7812 7.21833 12.7812 6.66699C12.7812 6.11499 12.3326 5.66699 11.7812 5.66699ZM11.7812 7.00033C11.5973 7.00033 11.4479 6.85099 11.4479 6.66699C11.4479 6.48299 11.5973 6.33366 11.7812 6.33366C11.9653 6.33366 12.1146 6.48299 12.1146 6.66699C12.1146 6.85099 11.9653 7.00033 11.7812 7.00033Z"
        fill={color}
      />
      <path
        d="M16.5625 5.66699C16.0112 5.66699 15.5625 6.11566 15.5625 6.66699C15.5625 7.21833 16.0112 7.66699 16.5625 7.66699C17.1138 7.66699 17.5625 7.21833 17.5625 6.66699C17.5625 6.11499 17.1138 5.66699 16.5625 5.66699ZM16.5625 7.00033C16.3785 7.00033 16.2292 6.85099 16.2292 6.66699C16.2292 6.48299 16.3785 6.33366 16.5625 6.33366C16.7465 6.33366 16.8958 6.48299 16.8958 6.66699C16.8958 6.85099 16.7465 7.00033 16.5625 7.00033Z"
        fill={color}
      />
      <path
        d="M18.6522 0H3.34783C1.50174 0 0 1.2287 0 2.73913V10.5652C0 12.0757 1.50174 13.3043 3.34783 13.3043H5.44357L2.92026 17.4334C2.82174 17.5954 2.87148 17.7926 3.04174 17.9084C3.12974 17.9695 3.23878 18 3.34783 18C3.44826 18 3.54965 17.9742 3.63478 17.9225L11.1597 13.3051H18.6522C20.4983 13.3051 22 12.0764 22 10.566V2.73913C22 1.2287 20.4983 0 18.6522 0ZM21.0435 10.5637C21.0435 11.6421 19.9703 12.5202 18.6522 12.5202H11C10.8957 12.5202 10.7953 12.5476 10.713 12.5984L4.68122 16.2994L6.64496 13.0868C6.71957 12.9663 6.71096 12.8215 6.62391 12.7064C6.53687 12.5914 6.38287 12.5217 6.21739 12.5217H3.34783C2.02974 12.5217 0.956522 11.6437 0.956522 10.5652V2.73913C0.956522 1.6607 2.02974 0.782609 3.34783 0.782609V0.781043H18.6522C19.9703 0.781043 21.0435 1.65913 21.0435 2.73757V10.5637Z"
        fill={color}
      />
    </svg>
  );
};
