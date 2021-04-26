import { IntlProvider } from "react-intl";
import messages from "../locale";

const Intl: React.FC = ({ children }) => {
  const currentLocale = "pt-br";
 
  return (
    <IntlProvider
      locale={currentLocale}
      defaultLocale={currentLocale}
      messages={messages[currentLocale]}
    >
      {children}
    </IntlProvider>
  );
};

export default Intl;
