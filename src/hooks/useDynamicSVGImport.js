import { useEffect, useRef, useState } from "react";

export default function useDynamicSVGImport(name, options = {}) {
  console.log(name);
  const ImportedIconRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { onCompleted, onError } = options;
  const importIcon = async () => {
    try {
      ImportedIconRef.current = (
        await import(`../assets/icons/shapes/${name}.svg`)
      ).ReactComponent;
      if (onCompleted) {
        onCompleted(name, ImportedIconRef.current);
      }
    } catch (err) {
      if (onError) {
        onError(err);
      }
      console.log("error");
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    importIcon();
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}
