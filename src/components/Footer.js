export default function Footer() {
  const year = new Date().getFullYear();

  return <p className="Footer">Copyright © {year}</p>;
}
