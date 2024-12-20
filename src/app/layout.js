import "./globals.css";

export const metadata = {
	title: "Info News - Новости: Всё о самых важных событиях, последних тенденциях и актуальной информации в мире и в вашей стране!",
	description: "Будьте в курсе всех актуальных событий! Info News предоставляет самые свежие новости, аналитику и информацию обо всех важнейших событиях в мире и в вашей стране.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />

			<body className={`marcellus`}>{children}</body>
		</html>
	);
}
