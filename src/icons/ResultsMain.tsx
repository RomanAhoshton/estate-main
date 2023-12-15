import { useWidth } from "../hooks/useWidth";

const ResultsMain = () => {
  const {width}=useWidth()
  return (
    <div style={{position: 'relative', display:width>1440?'block':'none'}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="468"
        height="614"
        viewBox="0 0 468 614"
        fill="none"
      >
        <path
          d="M5.16846 187.481V426.96C5.16846 449.296 15.2784 469.937 31.6908 481.105L207.646 600.844C224.058 612.012 244.278 612.012 260.691 600.844L436.646 481.105C453.058 469.937 463.168 449.296 463.168 426.96V187.481C463.168 165.144 453.058 144.504 436.646 133.335L260.691 13.5961C244.278 2.42791 224.058 2.42791 207.646 13.5961L31.6908 133.335C15.2784 144.504 5.16846 165.144 5.16846 187.481"
          stroke="url(#paint0_linear_10_175)"
          strokeWidth="9"
        />
        <defs>
          <linearGradient
            id="paint0_linear_10_175"
            x1="-75.4668"
            y1="43.6638"
            x2="-211.825"
            y2="607.119"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C8E6C9" />
            <stop offset="1" stopColor="#FFECB3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ResultsMain;
