import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>Boo Space</span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <ThemeSwitch />
      </div>
      <Backlink />
    </Container>
  );
}

const Backlink = () => {
  return (
    <a
      href="#"
      rel="noopener"
      className="dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300 fixed bottom-5 right-5 flex place-items-center space-x-2 rounded border border-gray-300 bg-white px-3 py-1 font-sans text-sm font-semibold text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
      <span>Up</span>
    </a>
  );
};
