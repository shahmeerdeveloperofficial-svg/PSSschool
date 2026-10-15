import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

/**
 * Drop-in React replacement for next/navigation hooks in React Router.
 */
export function usePathname() {
  const location = useLocation();
  return location.pathname;
}

export function useRouter() {
  const navigate = useNavigate();
  return {
    push: (url) => navigate(url),
    replace: (url) => navigate(url, { replace: true }),
    back: () => navigate(-1),
    forward: () => navigate(1),
    refresh: () => window.location.reload(),
    prefetch: () => {},
  };
}

export function notFound() {
  return null;
}

export { useParams, useSearchParams };
