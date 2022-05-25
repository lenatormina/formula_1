export const SvgIcon = ({ viewBox = '0 0 24 24', children, className, ...props }) => {
  return (
    <svg style={className} viewBox={viewBox} {...props}>
      {children}
    </svg>
  );
};
