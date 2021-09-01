import React from 'react'
import * as S from './Logo.styles'

export type LogoProps = {
  hideOnMobile?: boolean
}

const Logo = ({ hideOnMobile = false }: LogoProps) => (
  <S.Wrapper hideOnMobile={hideOnMobile}>
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 560 142"
      role="img"
      aria-label="Arthur Hauenstein"
    >
      <g clipPath="url(#clip0)">
        <path
          className="logo-name"
          d="M118.152 74.512C118.152 71.728 118.648 69.296 119.64 67.216C120.664 65.136 122.04 63.536 123.768 62.416C125.528 61.296 127.48 60.736 129.624 60.736C131.48 60.736 133.08 61.104 134.424 61.84C135.768 62.576 136.808 63.568 137.544 64.816V61.072H146.952V88H137.544V84.256C136.808 85.504 135.752 86.496 134.376 87.232C133.032 87.968 131.448 88.336 129.624 88.336C127.48 88.336 125.528 87.776 123.768 86.656C122.04 85.536 120.664 83.936 119.64 81.856C118.648 79.744 118.152 77.296 118.152 74.512ZM137.544 74.512C137.544 72.784 137.064 71.424 136.104 70.432C135.176 69.44 134.024 68.944 132.648 68.944C131.24 68.944 130.072 69.44 129.144 70.432C128.216 71.392 127.752 72.752 127.752 74.512C127.752 76.24 128.216 77.616 129.144 78.64C130.072 79.632 131.24 80.128 132.648 80.128C134.024 80.128 135.176 79.632 136.104 78.64C137.064 77.648 137.544 76.272 137.544 74.512ZM161.721 65.824C162.777 64.288 164.057 63.072 165.561 62.176C167.065 61.28 168.681 60.832 170.409 60.832V70.864H167.769C165.721 70.864 164.201 71.264 163.209 72.064C162.217 72.864 161.721 74.256 161.721 76.24V88H152.313V61.072H161.721V65.824ZM189.67 79.984V88H185.59C178.71 88 175.27 84.592 175.27 77.776V68.896H171.958V61.072H175.27V54.544H184.726V61.072H189.622V68.896H184.726V77.92C184.726 78.656 184.886 79.184 185.206 79.504C185.558 79.824 186.134 79.984 186.934 79.984H189.67ZM211.697 60.832C214.769 60.832 217.201 61.872 218.993 63.952C220.817 66 221.729 68.784 221.729 72.304V88H212.321V73.552C212.321 72.016 211.921 70.816 211.121 69.952C210.321 69.056 209.249 68.608 207.905 68.608C206.497 68.608 205.393 69.056 204.593 69.952C203.793 70.816 203.393 72.016 203.393 73.552V88H193.985V52.48H203.393V64.912C204.225 63.696 205.345 62.72 206.753 61.984C208.193 61.216 209.841 60.832 211.697 60.832ZM254.443 61.072V88H244.987V84.16C244.187 85.376 243.083 86.368 241.675 87.136C240.267 87.872 238.651 88.24 236.827 88.24C233.691 88.24 231.211 87.216 229.387 85.168C227.595 83.088 226.699 80.272 226.699 76.72V61.072H236.059V75.52C236.059 77.056 236.459 78.272 237.259 79.168C238.091 80.032 239.179 80.464 240.523 80.464C241.899 80.464 242.987 80.032 243.787 79.168C244.587 78.272 244.987 77.056 244.987 75.52V61.072H254.443ZM269.205 65.824C270.261 64.288 271.541 63.072 273.045 62.176C274.549 61.28 276.165 60.832 277.893 60.832V70.864H275.253C273.205 70.864 271.685 71.264 270.693 72.064C269.701 72.864 269.205 74.256 269.205 76.24V88H259.797V61.072H269.205V65.824ZM306.03 61.12C308.046 61.12 309.838 61.552 311.406 62.416C313.006 63.28 314.254 64.56 315.15 66.256C316.078 67.952 316.542 70 316.542 72.4V88H311.118V73.216C311.118 70.848 310.526 69.04 309.342 67.792C308.158 66.512 306.542 65.872 304.494 65.872C302.446 65.872 300.814 66.512 299.598 67.792C298.414 69.04 297.822 70.848 297.822 73.216V88H292.35V52.48H297.822V64.624C298.75 63.504 299.918 62.64 301.326 62.032C302.766 61.424 304.334 61.12 306.03 61.12ZM321.698 74.656C321.698 72 322.242 69.648 323.33 67.6C324.45 65.552 325.954 63.968 327.842 62.848C329.762 61.696 331.874 61.12 334.178 61.12C336.258 61.12 338.066 61.536 339.602 62.368C341.17 63.168 342.418 64.176 343.346 65.392V61.552H348.866V88H343.346V84.064C342.418 85.312 341.154 86.352 339.554 87.184C337.954 88.016 336.13 88.432 334.082 88.432C331.81 88.432 329.73 87.856 327.842 86.704C325.954 85.52 324.45 83.888 323.33 81.808C322.242 79.696 321.698 77.312 321.698 74.656ZM343.346 74.752C343.346 72.928 342.962 71.344 342.194 70C341.458 68.656 340.482 67.632 339.266 66.928C338.05 66.224 336.738 65.872 335.33 65.872C333.922 65.872 332.61 66.224 331.394 66.928C330.178 67.6 329.186 68.608 328.418 69.952C327.682 71.264 327.314 72.832 327.314 74.656C327.314 76.48 327.682 78.08 328.418 79.456C329.186 80.832 330.178 81.888 331.394 82.624C332.642 83.328 333.954 83.68 335.33 83.68C336.738 83.68 338.05 83.328 339.266 82.624C340.482 81.92 341.458 80.896 342.194 79.552C342.962 78.176 343.346 76.576 343.346 74.752ZM380.005 61.552V88H374.533V84.88C373.669 85.968 372.533 86.832 371.125 87.472C369.749 88.08 368.277 88.384 366.709 88.384C364.629 88.384 362.757 87.952 361.093 87.088C359.461 86.224 358.165 84.944 357.205 83.248C356.277 81.552 355.813 79.504 355.813 77.104V61.552H361.237V76.288C361.237 78.656 361.829 80.48 363.013 81.76C364.197 83.008 365.813 83.632 367.861 83.632C369.909 83.632 371.525 83.008 372.709 81.76C373.925 80.48 374.533 78.656 374.533 76.288V61.552H380.005ZM411.465 74.128C411.465 75.12 411.401 76.016 411.273 76.816H391.065C391.225 78.928 392.009 80.624 393.417 81.904C394.825 83.184 396.553 83.824 398.601 83.824C401.545 83.824 403.625 82.592 404.841 80.128H410.745C409.945 82.56 408.489 84.56 406.377 86.128C404.297 87.664 401.705 88.432 398.601 88.432C396.073 88.432 393.801 87.872 391.785 86.752C389.801 85.6 388.233 84 387.081 81.952C385.961 79.872 385.401 77.472 385.401 74.752C385.401 72.032 385.945 69.648 387.033 67.6C388.153 65.52 389.705 63.92 391.689 62.8C393.705 61.68 396.009 61.12 398.601 61.12C401.097 61.12 403.321 61.664 405.273 62.752C407.225 63.84 408.745 65.376 409.833 67.36C410.921 69.312 411.465 71.568 411.465 74.128ZM405.753 72.4C405.721 70.384 405.001 68.768 403.593 67.552C402.185 66.336 400.441 65.728 398.361 65.728C396.473 65.728 394.857 66.336 393.513 67.552C392.169 68.736 391.369 70.352 391.113 72.4H405.753ZM430.194 61.12C432.274 61.12 434.13 61.552 435.762 62.416C437.426 63.28 438.722 64.56 439.65 66.256C440.578 67.952 441.042 70 441.042 72.4V88H435.618V73.216C435.618 70.848 435.026 69.04 433.842 67.792C432.658 66.512 431.042 65.872 428.994 65.872C426.946 65.872 425.314 66.512 424.098 67.792C422.914 69.04 422.322 70.848 422.322 73.216V88H416.85V61.552H422.322V64.576C423.218 63.488 424.354 62.64 425.73 62.032C427.138 61.424 428.626 61.12 430.194 61.12ZM457.622 88.432C455.542 88.432 453.67 88.064 452.006 87.328C450.374 86.56 449.078 85.536 448.118 84.256C447.158 82.944 446.646 81.488 446.582 79.888H452.246C452.342 81.008 452.87 81.952 453.83 82.72C454.822 83.456 456.054 83.824 457.526 83.824C459.062 83.824 460.246 83.536 461.078 82.96C461.942 82.352 462.374 81.584 462.374 80.656C462.374 79.664 461.894 78.928 460.934 78.448C460.006 77.968 458.518 77.44 456.47 76.864C454.486 76.32 452.87 75.792 451.622 75.28C450.374 74.768 449.286 73.984 448.358 72.928C447.462 71.872 447.014 70.48 447.014 68.752C447.014 67.344 447.43 66.064 448.262 64.912C449.094 63.728 450.278 62.8 451.814 62.128C453.382 61.456 455.174 61.12 457.19 61.12C460.198 61.12 462.614 61.888 464.438 63.424C466.294 64.928 467.286 66.992 467.414 69.616H461.942C461.846 68.432 461.366 67.488 460.502 66.784C459.638 66.08 458.47 65.728 456.998 65.728C455.558 65.728 454.454 66 453.686 66.544C452.918 67.088 452.534 67.808 452.534 68.704C452.534 69.408 452.79 70 453.302 70.48C453.814 70.96 454.438 71.344 455.174 71.632C455.91 71.888 456.998 72.224 458.438 72.64C460.358 73.152 461.926 73.68 463.142 74.224C464.39 74.736 465.462 75.504 466.358 76.528C467.254 77.552 467.718 78.912 467.75 80.608C467.75 82.112 467.334 83.456 466.502 84.64C465.67 85.824 464.486 86.752 462.95 87.424C461.446 88.096 459.67 88.432 457.622 88.432ZM480.047 66.016V80.656C480.047 81.648 480.271 82.368 480.719 82.816C481.199 83.232 481.999 83.44 483.119 83.44H486.479V88H482.159C479.695 88 477.807 87.424 476.495 86.272C475.183 85.12 474.527 83.248 474.527 80.656V66.016H471.407V61.552H474.527V54.976H480.047V61.552H486.479V66.016H480.047ZM515.762 74.128C515.762 75.12 515.698 76.016 515.57 76.816H495.362C495.522 78.928 496.306 80.624 497.714 81.904C499.122 83.184 500.85 83.824 502.898 83.824C505.842 83.824 507.922 82.592 509.138 80.128H515.042C514.242 82.56 512.786 84.56 510.674 86.128C508.594 87.664 506.002 88.432 502.898 88.432C500.37 88.432 498.098 87.872 496.082 86.752C494.098 85.6 492.53 84 491.378 81.952C490.258 79.872 489.698 77.472 489.698 74.752C489.698 72.032 490.242 69.648 491.33 67.6C492.45 65.52 494.002 63.92 495.986 62.8C498.002 61.68 500.306 61.12 502.898 61.12C505.394 61.12 507.618 61.664 509.57 62.752C511.522 63.84 513.042 65.376 514.13 67.36C515.218 69.312 515.762 71.568 515.762 74.128ZM510.05 72.4C510.018 70.384 509.298 68.768 507.89 67.552C506.482 66.336 504.738 65.728 502.658 65.728C500.77 65.728 499.154 66.336 497.81 67.552C496.466 68.736 495.666 70.352 495.41 72.4H510.05ZM523.931 58.048C522.939 58.048 522.107 57.712 521.435 57.04C520.763 56.368 520.427 55.536 520.427 54.544C520.427 53.552 520.763 52.72 521.435 52.048C522.107 51.376 522.939 51.04 523.931 51.04C524.891 51.04 525.707 51.376 526.379 52.048C527.051 52.72 527.387 53.552 527.387 54.544C527.387 55.536 527.051 56.368 526.379 57.04C525.707 57.712 524.891 58.048 523.931 58.048ZM526.619 61.552V88H521.147V61.552H526.619ZM547.147 61.12C549.227 61.12 551.083 61.552 552.715 62.416C554.379 63.28 555.675 64.56 556.603 66.256C557.531 67.952 557.995 70 557.995 72.4V88H552.571V73.216C552.571 70.848 551.979 69.04 550.795 67.792C549.611 66.512 547.995 65.872 545.947 65.872C543.899 65.872 542.267 66.512 541.051 67.792C539.867 69.04 539.275 70.848 539.275 73.216V88H533.803V61.552H539.275V64.576C540.171 63.488 541.307 62.64 542.683 62.032C544.091 61.424 545.579 61.12 547.147 61.12Z"
          fill="#A3E0F2"
        />
        <g clipPath="url(#clip1)">
          <g filter="url(#filter0_i)">
            <path
              d="M69.399 100.581L59.6153 110.386L49.8106 100.602L59.5943 90.7975L69.399 100.581Z"
              fill="#1BB3E0"
            />
          </g>
          <g filter="url(#filter1_i)">
            <path
              d="M59.5356 90.8566L49.7519 100.661L39.9472 90.8777L49.7309 81.0729L59.5356 90.8566Z"
              fill="#1BB3E0"
              fillOpacity="0.8"
            />
          </g>
          <g filter="url(#filter2_i)">
            <path
              d="M39.809 71.4075L30.0253 81.2122L20.2206 71.4285L30.0043 61.6238L39.809 71.4075Z"
              fill="#1BB3E0"
              fillOpacity="0.4"
            />
          </g>
          <g filter="url(#filter3_i)">
            <path
              d="M49.6722 81.132L39.8885 90.9367L30.0838 81.1531L39.8675 71.3483L49.6722 81.132Z"
              fill="#1BB3E0"
              fillOpacity="0.6"
            />
          </g>
          <g filter="url(#filter4_i)">
            <path
              d="M59.6744 110.444L49.8907 120.249L40.086 110.466L49.8697 100.661L59.6744 110.444Z"
              fill="#1BB3E0"
            />
          </g>
          <g filter="url(#filter5_i)">
            <path
              d="M79.1235 90.7178L69.3399 100.523L59.5351 90.7388L69.3188 80.9341L79.1235 90.7178Z"
              fill="#1BB3E0"
            />
          </g>
          <g filter="url(#filter6_i)">
            <path
              d="M49.8111 100.72L40.0274 110.525L30.2227 100.741L40.0063 90.9363L49.8111 100.72Z"
              fill="#1BB3E0"
              fillOpacity="0.8"
            />
          </g>
          <g filter="url(#filter7_i)">
            <path
              d="M30.0844 81.2709L20.3007 91.0756L10.496 81.2919L20.2797 71.4872L30.0844 81.2709Z"
              fill="#1BB3E0"
              fillOpacity="0.4"
            />
          </g>
          <g filter="url(#filter8_i)">
            <path
              d="M20.221 71.5462L10.4373 81.351L0.632615 71.5673L10.4163 61.7626L20.221 71.5462Z"
              fill="#1BB3E0"
              fillOpacity="0.2"
            />
          </g>
          <g filter="url(#filter9_i)">
            <path
              d="M39.9477 90.9954L30.164 100.8L20.3593 91.0164L30.143 81.2117L39.9477 90.9954Z"
              fill="#1BB3E0"
              fillOpacity="0.6"
            />
          </g>
          <g filter="url(#filter10_i)">
            <path
              d="M69.2602 80.9933L59.4765 90.798L49.6718 81.0143L59.4555 71.2096L69.2602 80.9933Z"
              fill="#1BB3E0"
              fillOpacity="0.8"
            />
          </g>
          <g filter="url(#filter11_i)">
            <path
              d="M59.3968 71.2688L49.6132 81.0735L39.8084 71.2898L49.5921 61.4851L59.3968 71.2688Z"
              fill="#1BB3E0"
              fillOpacity="0.6"
            />
          </g>
          <g filter="url(#filter12_i)">
            <path
              d="M88.8482 80.8545L79.0645 90.6592L69.2598 80.8755L79.0435 71.0708L88.8482 80.8545Z"
              fill="#1BB3E0"
            />
          </g>
          <g filter="url(#filter13_i)">
            <path
              d="M78.9848 71.1299L69.2011 80.9347L59.3964 71.151L69.1801 61.3463L78.9848 71.1299Z"
              fill="#1BB3E0"
              fillOpacity="0.8"
            />
          </g>
          <g filter="url(#filter14_i)">
            <path
              d="M98.5727 70.9911L88.789 80.7958L78.9843 71.0121L88.768 61.2074L98.5727 70.9911Z"
              fill="#1BB3E0"
            />
          </g>
        </g>
        <g clipPath="url(#clip2)">
          <g filter="url(#filter15_i)">
            <path
              d="M68.9691 41.9059L59.089 32.1984L49.3814 42.0785L59.2615 51.786L68.9691 41.9059Z"
              fill="#1BB3E0"
            />
          </g>
          <g filter="url(#filter16_i)">
            <path
              d="M59.2022 51.7274L49.3221 42.0199L39.6146 51.9L49.4947 61.6075L59.2022 51.7274Z"
              fill="#1BB3E0"
              fillOpacity="0.8"
            />
          </g>
          <g filter="url(#filter17_i)">
            <path
              d="M39.6688 71.3706L29.7887 61.663L20.0811 71.5431L29.9612 81.2507L39.6688 71.3706Z"
              fill="#1BB3E0"
              fillOpacity="0.4"
            />
          </g>
          <g filter="url(#filter18_i)">
            <path
              d="M49.4355 61.5491L39.5554 51.8415L29.8478 61.7216L39.7279 71.4292L49.4355 61.5491Z"
              fill="#1BB3E0"
              fillOpacity="0.6"
            />
          </g>
          <g filter="url(#filter19_i)">
            <path
              d="M59.1475 32.1392L49.2674 22.4316L39.5598 32.3117L49.4399 42.0193L59.1475 32.1392Z"
              fill="#1BB3E0"
            />
          </g>
          <g filter="url(#filter20_i)">
            <path
              d="M78.7906 51.6727L68.9105 41.9651L59.2029 51.8452L69.083 61.5528L78.7906 51.6727Z"
              fill="#1BB3E0"
            />
          </g>
          <g filter="url(#filter21_i)">
            <path
              d="M49.3807 41.9607L39.5006 32.2531L29.7931 42.1332L39.6732 51.8408L49.3807 41.9607Z"
              fill="#1BB3E0"
              fillOpacity="0.8"
            />
          </g>
          <g filter="url(#filter22_i)">
            <path
              d="M29.8472 61.6038L19.9671 51.8962L10.2595 61.7763L20.1396 71.4839L29.8472 61.6038Z"
              fill="#1BB3E0"
              fillOpacity="0.4"
            />
          </g>
          <g filter="url(#filter23_i)">
            <path
              d="M20.0804 71.4254L10.2003 61.7178L0.492778 71.5979L10.3729 81.3055L20.0804 71.4254Z"
              fill="#1BB3E0"
              fillOpacity="0.2"
            />
          </g>
          <g filter="url(#filter24_i)">
            <path
              d="M39.614 51.7823L29.7339 42.0747L20.0263 51.9548L29.9064 61.6624L39.614 51.7823Z"
              fill="#1BB3E0"
              fillOpacity="0.6"
            />
          </g>
          <g filter="url(#filter25_i)">
            <path
              d="M69.0238 61.4942L59.1437 51.7867L49.4362 61.6668L59.3163 71.3743L69.0238 61.4942Z"
              fill="#1BB3E0"
              fillOpacity="0.8"
            />
          </g>
          <g filter="url(#filter26_i)">
            <path
              d="M59.2571 71.3157L49.377 61.6082L39.6694 71.4883L49.5495 81.1958L59.2571 71.3157Z"
              fill="#1BB3E0"
              fillOpacity="0.6"
            />
          </g>
          <g filter="url(#filter27_i)">
            <path
              d="M88.6122 61.4395L78.7321 51.7319L69.0245 61.612L78.9046 71.3196L88.6122 61.4395Z"
              fill="#1BB3E0"
            />
          </g>
          <g filter="url(#filter28_i)">
            <path
              d="M78.8454 71.261L68.9653 61.5534L59.2578 71.4335L69.1379 81.1411L78.8454 71.261Z"
              fill="#1BB3E0"
              fillOpacity="0.8"
            />
          </g>
          <g filter="url(#filter29_i)">
            <path
              d="M98.4337 71.2062L88.5536 61.4987L78.8461 71.3788L88.7262 81.0863L98.4337 71.2062Z"
              fill="#1BB3E0"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i"
          x="49.8106"
          y="90.7975"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter1_i"
          x="39.9472"
          y="81.0729"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter2_i"
          x="20.2206"
          y="61.6238"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter3_i"
          x="30.0838"
          y="71.3483"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter4_i"
          x="40.086"
          y="100.661"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter5_i"
          x="59.5351"
          y="80.9341"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter6_i"
          x="30.2227"
          y="90.9363"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter7_i"
          x="10.496"
          y="71.4872"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter8_i"
          x="0.632629"
          y="61.7626"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter9_i"
          x="20.3593"
          y="81.2117"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter10_i"
          x="49.6718"
          y="71.2096"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter11_i"
          x="39.8084"
          y="61.4851"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter12_i"
          x="69.2598"
          y="71.0708"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter13_i"
          x="59.3964"
          y="61.3463"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter14_i"
          x="78.9843"
          y="61.2074"
          width="19.5884"
          height="23.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter15_i"
          x="49.3814"
          y="32.1984"
          width="19.5877"
          height="23.5877"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter16_i"
          x="39.6146"
          y="42.0199"
          width="19.5877"
          height="23.5877"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter17_i"
          x="20.0811"
          y="61.663"
          width="19.5877"
          height="23.5877"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter18_i"
          x="29.8478"
          y="51.8415"
          width="19.5877"
          height="23.5877"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter19_i"
          x="39.5598"
          y="22.4316"
          width="19.5877"
          height="23.5877"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter20_i"
          x="59.2029"
          y="41.9651"
          width="19.5877"
          height="23.5877"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter21_i"
          x="29.7931"
          y="32.2531"
          width="19.5876"
          height="23.5876"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter22_i"
          x="10.2595"
          y="51.8962"
          width="19.5877"
          height="23.5877"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter23_i"
          x="0.492767"
          y="61.7178"
          width="19.5877"
          height="23.5877"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter24_i"
          x="20.0263"
          y="42.0747"
          width="19.5877"
          height="23.5877"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter25_i"
          x="49.4362"
          y="51.7867"
          width="19.5877"
          height="23.5877"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter26_i"
          x="39.6694"
          y="61.6082"
          width="19.5877"
          height="23.5877"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter27_i"
          x="69.0246"
          y="51.7319"
          width="19.5877"
          height="23.5877"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter28_i"
          x="59.2578"
          y="61.5534"
          width="19.5877"
          height="23.5877"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="filter29_i"
          x="78.8461"
          y="61.4987"
          width="19.5877"
          height="23.5877"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        <clipPath id="clip0">
          <rect width="604" height="142" fill="white" />
        </clipPath>
        <clipPath id="clip1">
          <rect
            width="71"
            height="98"
            fill="white"
            transform="matrix(0.00107364 0.999999 0.999999 -0.00107364 0.616241 56.3021)"
          />
        </clipPath>
        <clipPath id="clip2">
          <rect
            width="71"
            height="98"
            fill="white"
            transform="translate(0.627228 86.8625) rotate(-90.5047)"
          />
        </clipPath>
      </defs>
    </svg>
  </S.Wrapper>
)

export default React.memo(Logo)
