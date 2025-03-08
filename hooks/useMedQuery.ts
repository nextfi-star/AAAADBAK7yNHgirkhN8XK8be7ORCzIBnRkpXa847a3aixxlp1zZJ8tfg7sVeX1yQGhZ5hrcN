import { useState, useEffect } from "react";

export function useMedQuery(query: string) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(query);

		// Устанавливаем начальное значение
		setMatches(mediaQuery.matches);

		// Функция обработки изменения экрана
		const handleChange = (event: MediaQueryListEvent) => {
			setMatches(event.matches);
		};

		// Добавляем слушатель изменений
		mediaQuery.addEventListener("change", handleChange);

		// Убираем слушатель при размонтировании компонента
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [query]);

	return matches;
}
