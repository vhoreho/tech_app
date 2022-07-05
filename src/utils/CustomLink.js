import {useMatch, useResolvedPath, Link} from 'react-router-dom'

export function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  let activeClassName = !match ?
      'aside__link text-center text-xs flex text-gray-400 flex-col items-center capitalize mb-10 hover:text-blue-500 font-semibold transition-all duration-200' :
      'aside__link active active:text-blue-400 text-center text-xs flex text-blue-400 flex-col items-center capitalize mb-10 hover:text-blue-500 font-semibold transition-all duration-200'

  return (
    <div>
      <Link
        className={activeClassName}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}