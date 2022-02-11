import React from 'react'
import Image from '../../util/image'
import { SharedLogoApi } from '../../../types'
import cn from 'classnames'

const Logo: React.FC<{ logo: SharedLogoApi; className?: string }> = ({
    logo,
    className,
}) => {
    return (
        <div className={cn(className, 'flex flex-col pr-1/5')}>
            <div className="w-2/3 relative mb-14">
                <img
                    src={logo.image.data.attributes.url}
                    alt={logo.image.data.attributes.alternativeText || ''}
                />
                <div className="absolute inset-0 h-full w-full px-10">
                    <svg
                        className="h-full w-full"
                        viewBox="0 0 127 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.105 29.861C10.859 32.79 14.293 34.255 18.408 34.255C22.521 34.255 25.956 32.79 28.709 29.861C31.499 26.898 32.894 23.255 32.894 18.931C32.894 14.609 31.499 10.965 28.709 8.001C25.956 5.073 22.521 3.609 18.408 3.609C14.293 3.609 10.859 5.073 8.105 8.001C5.315 10.965 3.921 14.609 3.921 18.931C3.921 23.255 5.315 26.898 8.105 29.861M5.229 5.439C8.75 1.813 13.143 0 18.408 0C23.637 0 28.012 1.813 31.534 5.439C35.055 9.065 36.816 13.563 36.816 18.931C36.816 24.336 35.055 28.85 31.534 32.476C28.047 36.067 23.671 37.863 18.408 37.863C13.108 37.863 8.714 36.067 5.229 32.476C1.742 28.885 0 24.37 0 18.931C0 13.528 1.742 9.03 5.229 5.439"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M49.104 19.5065V33.7315H62.022C64.741 33.7315 66.85 33.1035 68.349 31.8485C69.848 30.5935 70.598 28.8335 70.598 26.5665C70.598 24.3355 69.848 22.6015 68.349 21.3625C66.85 20.1265 64.741 19.5065 62.022 19.5065H49.104ZM49.104 4.1315V16.1075H60.453C62.789 16.1075 64.592 15.6025 65.866 14.5905C67.138 13.5795 67.774 12.1155 67.774 10.1975C67.774 8.2455 67.138 6.7465 65.866 5.7005C64.592 4.6545 62.789 4.1315 60.453 4.1315H49.104ZM62.702 37.2355H45.235V0.627502H61.081C64.323 0.627502 66.885 1.4215 68.768 3.0065C70.651 4.5935 71.592 6.7645 71.592 9.5175C71.592 11.4005 71.165 13.0215 70.311 14.3815C69.456 15.7415 68.279 16.7005 66.781 17.2575C69.22 17.6415 71.156 18.7045 72.585 20.4475C74.015 22.1915 74.73 24.3875 74.73 27.0375C74.73 30.1405 73.649 32.6155 71.488 34.4635C69.325 36.3115 66.397 37.2355 62.702 37.2355V37.2355Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M97.1645 5.2819L88.8505 23.7419H105.48L97.1645 5.2819ZM83.0975 37.2349H79.0705L95.3875 0.4179H98.9955L115.364 37.2349H111.285L106.735 27.1419H87.5425L83.0975 37.2349Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M125.667 25.9914H122.163L121.483 0.627403H126.347L125.667 25.9914ZM123.889 37.5484C123.121 37.5484 122.477 37.2874 121.953 36.7644C121.431 36.2414 121.169 35.5964 121.169 34.8294C121.169 34.0634 121.431 33.4174 121.953 32.8944C122.477 32.3714 123.121 32.1104 123.889 32.1104C124.655 32.1104 125.301 32.3714 125.823 32.8944C126.347 33.4174 126.608 34.0634 126.608 34.8294C126.608 35.5964 126.347 36.2414 125.823 36.7644C125.301 37.2874 124.655 37.5484 123.889 37.5484V37.5484Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
            <div className="self-center w-full pl-1/5">
                <svg
                    viewBox="0 0 169 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.37131 10.7442C5.29831 11.7102 6.43331 12.1922 7.77631 12.1922C9.12031 12.1922 10.2553 11.7102 11.1823 10.7442C12.1083 9.7532 12.5713 8.5402 12.5713 7.1042C12.5713 5.6562 12.1083 4.4492 11.1823 3.4832C10.2553 2.5052 9.12031 2.0152 7.77631 2.0152C6.43331 2.0152 5.29831 2.5052 4.37131 3.4832C3.45831 4.4362 3.00131 5.6432 3.00131 7.1042C3.00131 8.5652 3.45831 9.7792 4.37131 10.7442M12.7873 12.1732C11.4563 13.5302 9.78531 14.2092 7.77631 14.2092C5.76731 14.2092 4.09731 13.5302 2.76731 12.1732C1.44831 10.7902 0.790314 9.1002 0.790314 7.1042C0.790314 5.0952 1.44831 3.4122 2.76731 2.0552C4.09731 0.684198 5.76731 0.000198364 7.77631 0.000198364C9.78531 0.000198364 11.4563 0.684198 12.7873 2.0552C14.1173 3.4122 14.7833 5.0952 14.7833 7.1042C14.7833 9.1132 14.1173 10.8032 12.7873 12.1732"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.676 2.2305V6.3215H23.239C24.047 6.3215 24.68 6.1425 25.136 5.7835C25.593 5.4245 25.822 4.9185 25.822 4.2665C25.822 3.6145 25.596 3.1115 25.146 2.7595C24.697 2.4075 24.06 2.2305 23.239 2.2305H19.676ZM19.676 13.9545H17.524V0.253502H23.414C24.849 0.253502 25.965 0.626502 26.761 1.3705C27.583 2.0875 27.993 3.0405 27.993 4.2275C27.993 5.4155 27.583 6.3935 26.761 7.1635C25.965 7.9195 24.849 8.2975 23.414 8.2975H19.676V13.9545Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M40.3029 13.9541H30.3029V0.254105H40.0489V2.2301H32.4549V5.6561H38.6399V7.6331H32.4549V11.9771H40.3029V13.9541Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M44.7854 13.9541H42.6724V0.254105H44.5504L52.2814 10.1771V0.254105H54.3944V13.9541H52.5744L44.7854 3.9921V13.9541Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M64.9953 7.6719V11.9779H69.1833C70.0183 11.9779 70.6743 11.7849 71.1503 11.4009C71.6263 11.0159 71.8643 10.4779 71.8643 9.7849C71.8643 9.1079 71.6303 8.5849 71.1603 8.2199C70.6903 7.8549 70.0313 7.6719 69.1833 7.6719H64.9953ZM64.9953 2.2309V5.7739H68.6943C69.4113 5.7739 69.9703 5.6199 70.3673 5.3139C70.7663 5.0069 70.9653 4.5669 70.9653 3.9919C70.9653 3.4179 70.7663 2.9819 70.3673 2.6809C69.9703 2.3809 69.4113 2.2309 68.6943 2.2309H64.9953ZM69.5753 13.9539H62.8433V0.253899H69.0663C70.3063 0.253899 71.2873 0.554899 72.0123 1.1539C72.7353 1.7549 73.0983 2.5769 73.0983 3.6199C73.0983 4.2989 72.9283 4.8859 72.5893 5.3819C72.2493 5.8779 71.8123 6.2309 71.2773 6.4389C72.1393 6.5959 72.8403 6.9999 73.3823 7.6519C73.9233 8.3049 74.1933 9.1199 74.1933 10.0989C74.1933 11.2599 73.7763 12.1929 72.9413 12.8979C72.1193 13.6019 70.9973 13.9539 69.5753 13.9539V13.9539Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M78.9104 2.2305V6.2625H82.8634C83.6464 6.2625 84.2564 6.0865 84.6934 5.7345C85.1314 5.3815 85.3494 4.8795 85.3494 4.2275C85.3494 3.6005 85.1314 3.1115 84.6934 2.7595C84.2564 2.4075 83.6464 2.2305 82.8634 2.2305H78.9104ZM78.9104 13.9545H76.7584V0.253502H83.0014C84.4104 0.253502 85.5124 0.613502 86.3084 1.3315C87.1174 2.0615 87.5214 3.0015 87.5214 4.1495C87.5214 5.1015 87.2584 5.9145 86.7284 6.5855C86.2004 7.2575 85.4724 7.7045 84.5474 7.9255L88.8524 13.9545H86.2494L82.1204 8.1615H78.9104V13.9545Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M96.6613 2.8965L94.1553 8.6505H99.1663L96.6613 2.8965ZM91.9443 13.9545H89.6543L95.6423 0.175499H97.7183L103.706 13.9545H101.396L99.9093 10.5485H93.4123L91.9443 13.9545Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M107.758 13.9541H105.645V0.254105H107.523L115.254 10.1771V0.254105H117.367V13.9541H115.547L107.758 3.9921V13.9541Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M122.749 2.2305V11.9775H125.234C126.957 11.9775 128.294 11.5405 129.247 10.6665C130.212 9.7795 130.695 8.5915 130.695 7.1045C130.695 5.6175 130.212 4.4295 129.247 3.5425C128.294 2.6675 126.957 2.2305 125.234 2.2305H122.749ZM125.431 13.9545H120.597V0.253502H125.431C127.622 0.253502 129.416 0.893502 130.812 2.1715C132.208 3.4515 132.906 5.0945 132.906 7.1045C132.906 9.1265 132.208 10.7775 130.812 12.0555C129.43 13.3215 127.635 13.9545 125.431 13.9545V13.9545Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M135.745 13.9546H137.897V0.254601H135.745V13.9546Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M143.338 13.9541H141.225V0.254105H143.103L150.834 10.1771V0.254105H152.947V13.9541H151.127L143.338 3.9921V13.9541Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M162.811 14.209C160.789 14.209 159.093 13.543 157.723 12.212C156.366 10.855 155.688 9.152 155.688 7.105C155.688 5.043 156.373 3.347 157.743 2.016C159.099 0.672 160.815 0 162.89 0C164.56 0 165.969 0.392 167.117 1.174V3.308C165.865 2.446 164.501 2.016 163.027 2.016C161.526 2.016 160.299 2.492 159.347 3.444C158.381 4.41 157.899 5.637 157.899 7.124C157.899 8.638 158.369 9.863 159.308 10.803C160.274 11.73 161.442 12.192 162.811 12.192C164.207 12.192 165.31 11.808 166.119 11.038V6.047H168.272V11.919C167.698 12.598 166.924 13.148 165.953 13.572C164.981 13.996 163.933 14.209 162.811 14.209"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.007 26.2061L4.501 31.9601H9.512L7.007 26.2061ZM2.29 37.2641H0L5.988 23.4851H8.064L14.052 37.2641H11.742L10.255 33.8581H3.758L2.29 37.2641Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.0803 37.3418H18.1623L13.5043 23.5638H15.9113L19.1803 33.8588L22.5073 23.5438H24.2103L27.5373 33.8588L30.8053 23.5638H33.1733L28.4963 37.3418H26.5983L23.3493 27.1458L20.0803 37.3418Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M39.6516 26.2061L37.1456 31.9601H42.1566L39.6516 26.2061ZM34.9346 37.2641H32.6446L38.6326 23.4851H40.7086L46.6966 37.2641H44.3866L42.8996 33.8581H36.4026L34.9346 37.2641Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M50.7863 25.5401V29.5721H54.7393C55.5223 29.5721 56.1323 29.3961 56.5693 29.0441C57.0073 28.6911 57.2253 28.1891 57.2253 27.5371C57.2253 26.9101 57.0073 26.4211 56.5693 26.0691C56.1323 25.7171 55.5223 25.5401 54.7393 25.5401H50.7863ZM50.7863 37.2641H48.6343V23.5631H54.8773C56.2863 23.5631 57.3883 23.9231 58.1843 24.6411C58.9933 25.3711 59.3973 26.3111 59.3973 27.4591C59.3973 28.4111 59.1343 29.2241 58.6043 29.8951C58.0763 30.5671 57.3483 31.0141 56.4233 31.2351L60.7283 37.2641H58.1253L53.9963 31.4711H50.7863V37.2641Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M64.9563 25.5401V35.2871H67.4413C69.1643 35.2871 70.5013 34.8501 71.4543 33.9761C72.4193 33.0891 72.9023 31.9011 72.9023 30.4141C72.9023 28.9271 72.4193 27.7391 71.4543 26.8521C70.5013 25.9771 69.1643 25.5401 67.4413 25.5401H64.9563ZM67.6383 37.2641H62.8043V23.5631H67.6383C69.8293 23.5631 71.6233 24.2031 73.0193 25.4811C74.4153 26.7611 75.1133 28.4041 75.1133 30.4141C75.1133 32.4361 74.4153 34.0871 73.0193 35.3651C71.6373 36.6311 69.8423 37.2641 67.6383 37.2641V37.2641Z"
                        fill="black"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M82.1594 37.5186C80.0714 37.5186 78.3554 37.0296 77.0124 36.0496V33.7216C77.5474 34.1916 78.2834 34.6086 79.2224 34.9736C80.1624 35.3266 81.1014 35.5016 82.0414 35.5016C82.9684 35.5016 83.7274 35.3196 84.3214 34.9546C84.9154 34.5886 85.2124 34.0926 85.2124 33.4666C85.2124 32.9706 85.0104 32.5466 84.6054 32.1946C84.4484 32.0516 84.2144 31.9146 83.9004 31.7846C83.5224 31.6016 82.8954 31.3856 82.0214 31.1376L81.7484 31.0596C81.0044 30.8506 80.4104 30.6626 79.9674 30.4926C79.6144 30.3616 79.1574 30.1336 78.5964 29.8066C77.6574 29.2196 77.1874 28.2996 77.1874 27.0476C77.1874 25.9126 77.6354 25.0056 78.5284 24.3276C79.4224 23.6486 80.6324 23.3096 82.1594 23.3096C83.8154 23.3096 85.2774 23.6876 86.5434 24.4446V26.5976C85.1464 25.7486 83.6984 25.3256 82.1984 25.3256C81.2844 25.3256 80.5904 25.4856 80.1134 25.8046C79.6374 26.1246 79.3994 26.5446 79.3994 27.0676C79.3994 27.5106 79.6674 27.9216 80.2024 28.2996C80.2804 28.3526 80.3904 28.4076 80.5344 28.4666C80.6784 28.5256 80.8414 28.5866 81.0234 28.6526C81.2064 28.7176 81.3374 28.7636 81.4154 28.7896L82.9804 29.2396C83.9324 29.5266 84.7684 29.8666 85.4864 30.2566C86.6994 30.9106 87.3454 31.9666 87.4244 33.4276C87.4244 34.6936 86.9214 35.6916 85.9164 36.4216C84.9114 37.1536 83.6594 37.5186 82.1594 37.5186"
                        fill="black"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Logo
