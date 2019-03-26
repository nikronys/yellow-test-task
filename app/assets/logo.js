import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({height, width}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width || '146'} height={height || '56'} viewBox='0 0 146 56'>
    <g fill="#FFF" fillRule="evenodd">
      <path d="M34.222 27.214c2.56-2.704 4.12-6.282 4.12-10.206 0-1.957-.388-3.827-1.094-5.546a5.936 5.936 0 0 0 3.627-5.474c0-3.277-2.647-5.933-5.912-5.933a5.911 5.911 0 0 0-5.337 3.377 16.655 16.655 0 0 0-7.333-1.682c-2.641 0-5.135.607-7.333 1.682A5.911 5.911 0 0 0 9.623.055c-3.265 0-5.912 2.656-5.912 5.933a5.935 5.935 0 0 0 3.628 5.474 14.551 14.551 0 0 0-1.094 5.546c0 3.924 1.559 7.502 4.12 10.206-4.49 4.263-11.698 11.12-9.99 17.978.79 3.171 2.851 4.427 5.033 4.54.155-4.058 3.117-7.295 6.75-7.295 3.731 0 6.757 3.416 6.757 7.63 0 2.396-.98 4.534-2.512 5.933h11.78c-1.531-1.399-2.511-3.537-2.511-5.934 0-4.213 3.025-7.629 6.757-7.629 3.633 0 6.594 3.237 6.75 7.295 2.181-.113 4.242-1.369 5.032-4.54 1.709-6.858-5.5-13.715-9.99-17.978zM9.004 8.45A2.54 2.54 0 0 1 7.09 5.988a2.538 2.538 0 0 1 2.534-2.543c1.148 0 2.116.766 2.428 1.816a15.648 15.648 0 0 0-3.047 3.19zm20.046 7.285c.7 0 1.267.57 1.267 1.272a1.27 1.27 0 0 1-1.267 1.271c-.7 0-1.266-.57-1.266-1.271 0-.702.566-1.272 1.266-1.272zm-13.514 0c.7 0 1.267.57 1.267 1.272a1.27 1.27 0 0 1-1.267 1.271c-.7 0-1.267-.57-1.267-1.271 0-.702.567-1.272 1.267-1.272zm6.757 16.53c-5.598 0-10.135-3.036-10.135-6.782 0-3.745 4.537-6.781 10.135-6.781s10.136 3.036 10.136 6.781c0 3.746-4.538 6.782-10.136 6.782zM32.535 5.26a2.535 2.535 0 0 1 2.428-1.816c1.399 0 2.534 1.139 2.534 2.543a2.54 2.54 0 0 1-1.915 2.463 15.646 15.646 0 0 0-3.047-3.19z"/>
      <path d="M15.007 50.49a2.961 2.961 0 0 1-2.956 2.967 2.961 2.961 0 0 1-2.956-2.967 2.962 2.962 0 0 1 2.956-2.967 2.962 2.962 0 0 1 2.956 2.967zM35.49 50.49a2.961 2.961 0 0 1-2.956 2.967 2.961 2.961 0 0 1-2.957-2.967 2.962 2.962 0 0 1 2.957-2.967 2.962 2.962 0 0 1 2.956 2.967zM22.293 22.094c-1.866 0-3.378.197-3.378 1.695s1.512 3.39 3.378 3.39 3.379-1.892 3.379-3.39c0-1.498-1.513-1.695-3.379-1.695zM60.12 22.781c.316-.047.602-.083.86-.106.257-.024.484-.036.683-.036.21 0 .447.012.71.036.263.023.547.059.85.106v9.943h4.05a6.912 6.912 0 0 1 0 2.788H60.12v-12.73zm8.275 6.392c0-.947.109-1.826.325-2.637.216-.81.55-1.512 1-2.104a4.697 4.697 0 0 1 1.717-1.393c.696-.338 1.523-.507 2.481-.507.959 0 1.783.17 2.472.507.69.337 1.26.802 1.71 1.393.45.592.783 1.294.999 2.104.216.811.324 1.69.324 2.637 0 .947-.108 1.82-.324 2.62-.216.798-.55 1.49-1 2.077a4.59 4.59 0 0 1-1.709 1.367c-.69.326-1.513.488-2.472.488-.958 0-1.785-.162-2.48-.488a4.573 4.573 0 0 1-1.719-1.367c-.45-.586-.783-1.279-1-2.078a10.005 10.005 0 0 1-.324-2.619zm7.767 0c0-2.58-.742-3.87-2.226-3.87-1.52 0-2.28 1.29-2.28 3.87 0 1.29.185 2.252.553 2.886.368.633.938.95 1.71.95 1.495 0 2.243-1.279 2.243-3.836zm11.589-.568c.315-.047.596-.083.841-.106.246-.024.474-.036.684-.036.199 0 .439.012.719.036.28.023.555.059.824.106v6.463c-.69.26-1.37.432-2.042.515-.673.083-1.248.125-1.727.125-1.029 0-1.929-.163-2.7-.489a5.356 5.356 0 0 1-1.938-1.358 5.635 5.635 0 0 1-1.166-2.078 8.594 8.594 0 0 1-.385-2.627c0-.947.134-1.826.403-2.637a6.165 6.165 0 0 1 1.166-2.104 5.25 5.25 0 0 1 1.885-1.385c.748-.332 1.595-.498 2.542-.498.56 0 1.096.042 1.604.125.508.083 1.066.254 1.674.515a5.346 5.346 0 0 1-.263 1.42 8.28 8.28 0 0 1-.473 1.172 15.856 15.856 0 0 0-.64-.213 5.377 5.377 0 0 0-1.64-.249c-.946 0-1.676.323-2.19.968-.515.645-.772 1.607-.772 2.886 0 1.266.251 2.21.754 2.832.502.621 1.25.932 2.244.932.222 0 .42-.018.596-.053v-4.262zm4.663.568c0-.947.109-1.826.325-2.637.216-.81.55-1.512 1-2.104a4.697 4.697 0 0 1 1.717-1.393c.696-.338 1.523-.507 2.481-.507s1.782.17 2.472.507c.69.337 1.26.802 1.71 1.393.45.592.783 1.294.999 2.104.216.811.324 1.69.324 2.637 0 .947-.108 1.82-.324 2.62-.216.798-.55 1.49-1 2.077a4.59 4.59 0 0 1-1.709 1.367c-.69.326-1.514.488-2.472.488s-1.785-.162-2.48-.488a4.573 4.573 0 0 1-1.719-1.367c-.45-.586-.783-1.279-1-2.078a10.005 10.005 0 0 1-.324-2.619zm7.767 0c0-2.58-.742-3.87-2.226-3.87-1.52 0-2.28 1.29-2.28 3.87 0 1.29.185 2.252.553 2.886.368.633.938.95 1.71.95 1.495 0 2.243-1.279 2.243-3.836zm13.903 2.61c0 .782-.14 1.427-.42 1.936a3.17 3.17 0 0 1-1.158 1.207c-.49.296-1.075.503-1.753.622-.678.118-1.414.177-2.209.177-.631 0-1.198-.023-1.7-.07a61.001 61.001 0 0 1-1.631-.178V22.78c.444-.071.93-.13 1.455-.177.526-.048 1.14-.072 1.84-.072.667 0 1.29.057 1.868.17a4.505 4.505 0 0 1 1.517.567c.432.267.774.622 1.025 1.066.252.444.377 1.003.377 1.678a3.15 3.15 0 0 1-.368 1.518c-.245.456-.555.808-.93 1.056.27.107.53.246.781.418.251.171.473.384.666.639.193.254.348.56.465.914.117.355.175.764.175 1.225zm-5.838-1.633v2.983c.082.012.184.02.307.027.122.005.283.008.482.008.222 0 .447-.023.675-.07.228-.048.435-.128.622-.24.187-.113.336-.267.447-.462.111-.195.167-.44.167-.737 0-.568-.184-.962-.552-1.18-.369-.22-.845-.33-1.43-.33h-.718zm0-2.522h.49c.503 0 .895-.103 1.175-.31.281-.207.421-.565.421-1.074 0-.25-.05-.456-.149-.622a1.143 1.143 0 0 0-.377-.39 1.47 1.47 0 0 0-.508-.196 2.912 2.912 0 0 0-.544-.053h-.254c-.1 0-.184.006-.254.018v2.627zm14.078 1.226a6.9 6.9 0 0 1-.158 1.385h-3.383v2.521h4.4c.105.497.158.947.158 1.35 0 .437-.053.905-.158 1.402h-7.503V22.746h7.398c.047.26.082.503.105.728.024.224.035.438.035.639 0 .39-.046.858-.14 1.403h-4.295v1.953h3.383c.106.52.158.982.158 1.385zm4.664 6.623a11 11 0 0 1-.737.106 6.12 6.12 0 0 1-.648.036c-.21 0-.453-.015-.728-.045-.275-.03-.581-.074-.92-.133l3.927-12.678c.304-.035.587-.065.85-.088a8.158 8.158 0 0 1 1.525 0c.263.023.564.053.903.088l3.875 12.696c-.666.106-1.25.16-1.753.16-.234 0-.468-.012-.701-.036-.234-.023-.486-.059-.754-.106l-.667-2.468c-.327.094-.64.165-.938.213a5.636 5.636 0 0 1-.885.07c-.269 0-.543-.02-.824-.061a7.509 7.509 0 0 1-.877-.187l-.648 2.433zm2.454-9.376l-1.174 4.564c.198.059.385.106.56.142.176.035.357.053.544.053.199 0 .395-.015.587-.044.193-.03.395-.074.605-.133l-1.122-4.582zm6.733-3.32c.572-.06 1.101-.115 1.586-.169.485-.053.997-.08 1.534-.08.643 0 1.286.063 1.929.187a5.12 5.12 0 0 1 1.718.648c.503.308.912.728 1.227 1.26.316.533.474 1.208.474 2.025 0 .438-.05.831-.15 1.18-.099.35-.227.66-.385.933a3.706 3.706 0 0 1-.526.71 4.914 4.914 0 0 1-.57.515l2.735 5.469a9.67 9.67 0 0 1-.92.106c-.333.024-.634.036-.903.036-.234 0-.506-.012-.815-.036a6.74 6.74 0 0 1-.816-.106l-2.49-5.806.159-.09c.14-.07.295-.188.464-.354.17-.166.327-.364.474-.595.146-.23.268-.488.368-.772.099-.285.149-.58.149-.888 0-.592-.164-1.024-.491-1.296-.327-.273-.73-.409-1.21-.409-.117 0-.216.006-.298.018a.635.635 0 0 0-.158.035V35.46c-.62.106-1.128.16-1.525.16a9.25 9.25 0 0 1-1.56-.16V22.78z"/>
    </g>
  </svg>
);

Logo.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.bool
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.bool
  ])
};


export default Logo;
