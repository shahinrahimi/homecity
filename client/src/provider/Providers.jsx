import { homecityLogo } from "../assets/svg"
// ceo third part provider
// third party providers
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// custome providers
import { LanguageProvider } from '../context/LanguageContext'
import { MenuProvider } from '../context/MenuContext'
import { SearchProvider } from '../context/SearchContext'
import { SmoothScrollingProvider } from "../context/SmoothScrollingContext"
import { LivePriceProvider } from "../context/LivePriceContext"
import { AuthProvider } from "../context/AuthContext"
import { UserProvider } from "../context/UserContext"

const queryClient = new QueryClient()

const Providers = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Helmet>
            <link rel="icon" type="image/svg+xml" href={homecityLogo} />
            {/* <script src="./src/lib/customScript.js" type='text/javascript' crossorigin="anonymous" async></script> */}
            <title>Homecity | Investment | Real state </title>
          </Helmet>
          <GoogleReCaptchaProvider 
            reCaptchaKey="6LcefbMoAAAAAM3qI0xMf4r_Ue24MEhZ-Kmyq2BX"
          >
            <AuthProvider>
              <UserProvider>
                <LanguageProvider>
                  <MenuProvider>
                    <SearchProvider>
                      <SmoothScrollingProvider>
                        <LivePriceProvider>
                          {children}
                        </LivePriceProvider>
                      </SmoothScrollingProvider>
                    </SearchProvider>
                  </MenuProvider>
                </LanguageProvider>
              </UserProvider>
            </AuthProvider>
          </GoogleReCaptchaProvider>
        </HelmetProvider >
        <ReactQueryDevtools initialIsOpen/>
      </QueryClientProvider>
    </>
  )
}
export default Providers