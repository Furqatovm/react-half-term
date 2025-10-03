import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<div className="bg-slate-100 max-md:px-[1rem]">
  <footer className="tracking-wide max-w-[1350px] mx-auto md:px-8 sm:px-12 pt-12 pb-6 mt-[3rem]">
    <div className="grid min-[1350px]:grid-cols-3 gap-12 xl:gap-16">
      <div className="min-[1350px]:max-w-sm max-w-lg w-full">
         <Link className='cursor-pointer' to={"/"}>
        <svg width="139" height="27" viewBox="0 0 139 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1_162)">
<g clipPath="url(#clip1_1_162)">
<g clipPath="url(#clip2_1_162)">
<path d="M94.5236 13.7595C94.5236 14.6974 94.689 15.5711 95.0287 16.3898C95.3686 17.2084 95.837 17.9165 96.4342 18.5237C97.022 19.1306 97.7292 19.6088 98.5466 19.9583C99.3549 20.3078 100.228 20.4826 101.164 20.4826C102.111 20.4826 102.965 20.3078 103.718 19.949C104.462 19.5905 105.105 19.103 105.619 18.4867C106.143 17.8704 106.547 17.1531 106.832 16.3254C107.116 15.4977 107.254 14.6146 107.254 13.6766V3.48602C107.254 3.06285 107.337 2.66735 107.502 2.30881C107.667 1.95002 107.897 1.63723 108.182 1.37072C108.467 1.10395 108.797 0.892498 109.165 0.736106C109.532 0.579715 109.918 0.506042 110.331 0.506042C110.754 0.506042 111.139 0.579715 111.488 0.736106C111.838 0.892498 112.15 1.10395 112.416 1.37072C112.683 1.63723 112.894 1.95002 113.041 2.30881C113.188 2.66735 113.261 3.06285 113.261 3.48602V13.6122C113.261 15.378 112.967 17.0427 112.37 18.6064C111.773 20.1698 110.937 21.531 109.872 22.6992C108.806 23.8671 107.53 24.7961 106.042 25.4768C104.554 26.1574 102.928 26.4976 101.164 26.4976C99.401 26.4976 97.7566 26.1574 96.223 25.4861C94.689 24.8145 93.3479 23.9041 92.209 22.7452C91.0701 21.5864 90.17 20.2344 89.5085 18.6891C88.8472 17.1441 88.5166 15.4977 88.5166 13.7502V3.48602C88.5166 3.06285 88.5993 2.66735 88.7555 2.30881C88.9116 1.95002 89.1228 1.63723 89.389 1.37072C89.6555 1.10395 89.9771 0.892498 90.3444 0.736106C90.7118 0.579715 91.0975 0.506042 91.5108 0.506042C91.9151 0.506042 92.3008 0.579715 92.6684 0.736106C93.0357 0.892498 93.357 1.10395 93.6419 1.37072C93.9174 1.63723 94.1286 1.95002 94.2847 2.30881C94.4409 2.66735 94.5236 3.06285 94.5236 3.48602V13.7595Z" fill="#011C47"/>
<path fillRule="evenodd" clipRule="evenodd" d="M85.0825 20.4655C86.7506 20.4655 88.1026 21.8177 88.1026 23.4856C88.1026 25.1536 86.7506 26.5059 85.0825 26.5059C83.4147 26.5059 82.0625 25.1536 82.0625 23.4856C82.0625 21.8177 83.4147 20.4655 85.0825 20.4655Z" fill="#6682A9"/>
<path d="M120.68 0.51355H134.219C134.715 0.519495 135.102 0.598079 135.556 0.787558C136.656 1.27638 137.324 2.27108 137.324 3.37927C137.322 3.94615 137.138 4.50063 136.791 4.96929L121.811 25.2565C120.852 26.5555 118.911 26.897 117.498 26.015C116.085 25.133 115.713 23.3483 116.673 22.0493L128.051 6.63919H120.838C118.971 6.63919 117.443 5.26579 117.443 3.5871C117.443 2.92741 117.679 2.31503 118.079 1.81432C118.634 1.03287 119.594 0.51355 120.68 0.51355ZM128.987 20.3924H135.676C137.384 20.3924 138.781 21.766 138.781 23.4447C138.781 25.1234 137.384 26.4971 135.676 26.4971H128.987C127.279 26.4971 125.882 25.1234 125.882 23.4447C125.882 21.766 127.279 20.3924 128.987 20.3924Z" fill="#011C47"/>
<path d="M79.1301 23.5494C79.1301 23.9715 79.0474 24.357 78.8915 24.715C78.7356 25.0727 78.534 25.3847 78.2773 25.651C78.0116 25.9173 77.7089 26.1282 77.3514 26.275C76.9846 26.4221 76.6087 26.4955 76.2052 26.4955C75.7926 26.4955 75.4077 26.4221 75.0226 26.275C74.6467 26.1282 74.3256 25.9263 74.0416 25.6603C73.7665 25.3941 73.5465 25.082 73.3814 24.724C73.2164 24.3663 73.134 23.9715 73.134 23.5494V13.3253C73.134 13.1784 73.1523 13.0683 73.1888 12.9949C73.1523 12.0956 72.9688 11.2511 72.6387 10.4619C72.3088 9.68172 71.8596 8.99334 71.2911 8.40603C70.7227 7.81872 70.0625 7.35058 69.3015 7.01091C68.5404 6.67125 67.697 6.50607 66.7803 6.50607C65.8451 6.50607 64.9832 6.67125 64.1948 7.01091C63.4061 7.35058 62.7369 7.82777 62.1778 8.43343C61.6184 9.03935 61.1784 9.74583 60.8573 10.5627C60.5365 11.3795 60.3716 12.2515 60.3716 13.1875V23.5494C60.3716 23.9715 60.2982 24.3663 60.1514 24.724C60.0048 25.082 59.7939 25.3941 59.5281 25.6603C59.2621 25.9263 58.9504 26.1282 58.6019 26.275C58.2537 26.4221 57.8686 26.4955 57.4467 26.4955C57.0341 26.4955 56.6492 26.4221 56.2824 26.275C55.9156 26.1282 55.5858 25.9173 55.3014 25.651C55.0171 25.3847 54.7881 25.0727 54.6229 24.715C54.4579 24.357 54.3755 23.9715 54.3755 23.5494V13.1691C54.3755 11.4072 54.6963 9.75514 55.3288 8.2225C55.9616 6.6896 56.8325 5.3498 57.942 4.20258C59.0512 3.05537 60.3623 2.15579 61.8751 1.49507C63.3971 0.834344 65.0199 0.503983 66.771 0.503983C68.5314 0.503983 70.1633 0.834344 71.667 1.49507C73.1704 2.15579 74.4725 3.05537 75.5819 4.20258C76.6821 5.3498 77.544 6.6896 78.1765 8.2225C78.8091 9.75514 79.1301 11.4072 79.1301 13.1691V23.5494Z" fill="#011C47"/>
<path d="M4.79544 0.494156H18.4424C18.9426 0.500101 19.3326 0.578685 19.7899 0.768165C20.8981 1.25647 21.572 2.2504 21.572 3.35806C21.5702 3.92418 21.3849 4.47866 21.0349 4.9468L5.93542 25.2203C4.96864 26.5185 3.01206 26.8597 1.58799 25.9783C0.163664 25.097 -0.210642 23.3137 0.756402 22.0155L12.2141 6.63117H4.89626C3.00741 6.63117 1.46184 5.25338 1.46184 3.56952C1.46184 2.5606 2.0171 1.66179 2.86834 1.10318C3.40033 0.722152 4.0701 0.494156 4.79544 0.494156ZM13.079 20.3145H19.8447C21.5723 20.3145 22.9857 21.7029 22.9857 23.4C22.9857 25.097 21.5723 26.4857 19.8447 26.4857H13.079C11.3515 26.4857 9.93828 25.097 9.93828 23.4C9.93828 21.7029 11.3515 20.3145 13.079 20.3145Z" fill="#011C47"/>
<path fillRule="evenodd" clipRule="evenodd" d="M37.4094 0.50993C37.7136 0.496747 39.6301 0.501917 40.5393 0.754212C41.868 1.01633 42.897 2.16846 42.9591 3.59408C43.0317 5.26424 41.7496 6.67642 40.0952 6.74854C39.9719 6.75397 39.8501 6.75164 39.7299 6.74233C39.7304 6.76198 37.9246 6.57121 37.6738 6.58232C33.8568 6.74854 30.8973 9.97952 31.0635 13.7988C31.23 17.6179 34.4591 20.579 38.2759 20.4128C42.0928 20.2463 45.0524 17.0153 44.8859 13.196C44.8746 12.9308 44.6135 11.3506 44.0701 10.2034C43.8923 9.7815 43.7134 9.32758 43.6824 8.8522C43.5311 6.52287 45.3639 5.55272 46.5587 5.53851C47.7537 5.52429 48.6083 6.13047 49.184 6.92096C50.8024 9.47958 50.9389 12.641 50.9547 12.9316C51.3453 20.1799 45.709 26.1724 38.5403 26.4849C31.3719 26.7974 25.3072 21.2361 24.995 14.0633C24.6827 6.89046 30.2407 0.822455 37.4094 0.50993Z" fill="#011C47"/>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_1_162">
<rect width="139" height="26" fill="white" transform="translate(0 0.5)"/>
</clipPath>
<clipPath id="clip1_1_162">
<rect width="139" height="26" fill="white" transform="translate(0 0.5)"/>
</clipPath>
<clipPath id="clip2_1_162">
<rect width="139" height="26.0117" fill="white" transform="translate(0 0.494156)"/>
</clipPath>
</defs>
</svg>

        </Link>
        <div className="mt-6">
          <p className="text-slate-600 leading-relaxed text-sm">ReadymadeUI is a library of pre-designed UI components built for Tailwind CSS. It offers a collection of versatile and ready-to-use components.</p>
        </div>
        <ul className="mt-6 flex space-x-5">
          <li>
            <a href="javascript:void(0)">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-8 h-8" viewBox="0 0 49.652 49.652">
                <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" data-original="#000000" />
              </svg>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 112.196 112.196">
                <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9" data-original="#007ab9" />
                <path fill="#fff" d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z" data-original="#f1f2f2" />
              </svg>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 152 152">
                <linearGradient id="a" x1="22.26" x2="129.74" y1="22.26" y2="129.74" gradientUnits="userSpaceOnUse">
                  <stop offset={0} stopColor="#fae100" />
                  <stop offset=".15" stopColor="#fcb720" />
                  <stop offset=".3" stopColor="#ff7950" />
                  <stop offset=".5" stopColor="#ff1c74" />
                  <stop offset={1} stopColor="#6c1cd1" />
                </linearGradient>
                <g data-name="Layer 2">
                  <g data-name="03.Instagram">
                    <rect width={152} height={152} fill="url(#a)" data-original="url(#a)" rx={76} />
                    <g fill="#fff">
                      <path fill="#ffffff10" d="M133.2 26c-11.08 20.34-26.75 41.32-46.33 60.9S46.31 122.12 26 133.2q-1.91-1.66-3.71-3.46A76 76 0 1 1 129.74 22.26q1.8 1.8 3.46 3.74z" data-original="#ffffff10" />
                      <path d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z" data-original="#ffffff" />
                      <path d="m90.59 61.56-.19-.19-.16-.16A20.16 20.16 0 0 0 76 55.33 20.52 20.52 0 0 0 55.62 76a20.75 20.75 0 0 0 6 14.61 20.19 20.19 0 0 0 14.42 6 20.73 20.73 0 0 0 14.55-35.05zM76 89.56A13.56 13.56 0 1 1 89.37 76 13.46 13.46 0 0 1 76 89.56zm26.43-35.18a4.88 4.88 0 0 1-4.85 4.92 4.81 4.81 0 0 1-3.42-1.43 4.93 4.93 0 0 1 3.43-8.39 4.82 4.82 0 0 1 3.09 1.12l.1.1a3.05 3.05 0 0 1 .44.44l.11.12a4.92 4.92 0 0 1 1.1 3.12z" data-original="#ffffff" />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 1227 1227">
                <path d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z" data-original="#000000" />
                <path fill="#fff" d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074L680.601 557.98zM345.423 299.545h95.595l440.024 629.411h-95.595z" data-original="#ffffff" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="min-[1200px]:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="max-lg:min-w-[140px]">
          <h4 className="text-slate-900 font-semibold text-base relative">Services</h4>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Web Development</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Pricing</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Support</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Client Portal</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Resources</a>
            </li>
          </ul>
        </div>
        <div className="max-lg:min-w-[140px]">
          <h4 className="text-slate-900 font-semibold text-base relative">Platforms</h4>
          <ul className="space-y-4 mt-6">
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Hubspot</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Integration Services</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Marketing Glossar</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">UIPath</a>
            </li>
          </ul>
        </div>
        <div className="max-lg:min-w-[140px]">
          <h4 className="text-slate-900 font-semibold text-base relative">Company</h4>
          <ul className="space-y-4 mt-6">
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">About us</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Careers</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Blog</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Portfolio</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Events</a>
            </li>
          </ul>
        </div>
        <div className="max-lg:min-w-[140px]">
          <h4 className="text-slate-900 font-semibold text-base relative">Additional</h4>
          <ul className="space-y-4 mt-6">
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">FAQ</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Partners</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Sitemap</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Contact</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">News</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="mt-10 mb-6 border-gray-300" />
    <div className="flex flex-wrap max-md:flex-col gap-4">
      <ul className="md:flex md:space-x-6 max-md:space-y-2">
        <li>
          <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Terms of Service</a>
        </li>
        <li>
          <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Privacy Policy</a>
        </li>
        <li>
          <a href="javascript:void(0)" className="hover:text-slate-900 text-slate-600 text-sm font-normal">Security</a>
        </li>
      </ul>
      <p className="text-slate-600 text-sm md:ml-auto">© ReadymadeUI. All rights reserved.</p>
    </div>
  </footer>
</div>


  )
}

export default Footer