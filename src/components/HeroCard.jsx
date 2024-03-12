import React from "react";

const HeroCard = ({installed, watt, province}) => {

  return (
    <div
      class="sm:flex  sm:items-center mt-3 w-1/3 rounded-lg p-3 shadow m-20 justify-between text-white "
      style={{ backgroundColor: "rgb(72, 89, 101, 0.6)" }}
    >
      <style>{`
            @property --num-installed {
                syntax: "<integer>";
                initial-value: 0;
                inherits: false;
              }
              
              @property --num-watt {
                syntax: "<integer>";
                initial-value: 0;
                inherits: false;
              }
              
              @property --num-province {
                syntax: "<integer>";
                initial-value: 0;
                inherits: false;
              }
              
              @keyframes counter {
                from {
                  --num-installed: 0;
                  --num-watt: 0;
                  --num-province: 0;
                }
                to {
                  --num-installed: ${installed};
                  --num-watt: ${watt};
                  --num-province: ${province};
                }
              }
              
            `}</style>
      <div class=" w-52 text-lg text-center font-semibold">
        <span class=" animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-installed)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
          <span class="sr-only">{installed}</span>
        </span>
        <div class="text-center font-bold">INSTALLED</div>
      </div>
      <div class=" w-52 text-lg text-center font-semibold">
        <span class=" animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-watt)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
          <span class="sr-only">{watt}</span>
        </span>
        <div class="text-center font-bold">kWp</div>
      </div>
      <div class=" w-52 text-lg text-center font-semibold">
        <span
          class={`animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-province)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]`}
        >
          <span class="sr-only">{province}</span>
        </span>
        <div class="text-center font-bold">PROVINCE</div>
      </div>
    </div>
  );
};
export default HeroCard;
