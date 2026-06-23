export default function AcousticDiagram() {
  return (
    <svg
      viewBox="0 0 480 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full bg-alacer-bg border border-[#E8E4DC]"
      aria-label="Schemat przepływu dźwięku przez system listwowy TIP TOP"
    >
      <rect x="0" y="0" width="480" height="26" fill="#e5e1dc" />
      <text
        x="240"
        y="17"
        textAnchor="middle"
        fontSize="8.5"
        fontWeight="600"
        fill="#917E6E"
        letterSpacing="2"
      >
        STROP
      </text>

      {[52, 120, 188, 256, 324, 392, 428].map((x) => (
        <line
          key={x}
          x1={x}
          y1="26"
          x2={x}
          y2="68"
          stroke="#917E6E"
          strokeWidth="0.7"
          strokeDasharray="3,2"
          opacity="0.5"
        />
      ))}

      <rect x="16" y="68" width="448" height="42" rx="1" fill="#917E6E" opacity="0.25" />
      <text
        x="240"
        y="92"
        textAnchor="middle"
        fontSize="8.5"
        fontWeight="500"
        fill="#4F382B"
        letterSpacing="0.4"
      >
        WEŁNA MINERALNA 50–100 mm · 40–60 kg/m³
      </text>

      <rect x="16" y="110" width="448" height="3.5" fill="#34302D" opacity="0.82" />
      <text x="18" y="124" fontSize="7" fill="#917E6E" letterSpacing="0.3">
        czarna fizelina
      </text>

      <rect x="16" y="128" width="448" height="5" fill="#917E6E" opacity="0.45" />
      <text
        x="240"
        y="145"
        textAnchor="middle"
        fontSize="7.5"
        fill="#917E6E"
        letterSpacing="0.5"
      >
        PROFIL GŁÓWNY TOP
      </text>

      {[27, 95, 163, 231, 299, 367, 435].map((x) => (
        <rect key={x} x={x} y="152" width="22" height="130" rx="1" fill="#4F382B" />
      ))}

      {[72, 140, 208, 276, 344, 412].map((x) => (
        <line
          key={x}
          x1={x}
          y1="285"
          x2={x}
          y2="163"
          stroke="#917E6E"
          strokeWidth="0.6"
          strokeDasharray="2,3"
          opacity="0.55"
        />
      ))}

      <line x1="466" y1="284" x2="466" y2="140" stroke="#4F382B" strokeWidth="1" opacity="0.4" />
      <polygon points="462,143 466,133 470,143" fill="#4F382B" opacity="0.4" />

      <line x1="49" y1="270" x2="95" y2="270" stroke="#917E6E" strokeWidth="0.6" opacity="0.6" />
      <line x1="49" y1="265" x2="49" y2="275" stroke="#917E6E" strokeWidth="0.6" opacity="0.6" />
      <line x1="95" y1="265" x2="95" y2="275" stroke="#917E6E" strokeWidth="0.6" opacity="0.6" />
      <text x="72" y="264" textAnchor="middle" fontSize="6.5" fill="#917E6E">
        szczelina
      </text>

      <line x1="16" y1="293" x2="30" y2="293" stroke="#917E6E" strokeWidth="0.7" strokeDasharray="2,2" />
      <text x="34" y="296" fontSize="7" fill="#917E6E">
        przepływ przez szczelinę (przezierność &gt; 30%)
      </text>
      <rect x="278" y="288" width="10" height="6" fill="#34302D" opacity="0.82" />
      <text x="292" y="296" fontSize="7" fill="#917E6E">
        czarna fizelina
      </text>
    </svg>
  );
}
