import * as React from 'react';

type Props = Omit<React.ComponentPropsWithoutRef<'svg'>, 'xmlns' | 'viewBox' | 'className'>;

// https://thenounproject.com/search/?q=focus%20chart&i=2013201
// Vision by supalerk laipawat from the Noun Project
const Icon = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="6 6 52 52" className="icon" {...props}>
    <path d="M27.6,47.673a7.959,7.959,0,0,0,9.3-.361l-4.841-4.841Z" />
    <path d="M45.405,32.209a25.792,25.792,0,0,0-4.847-2.264,13.95,13.95,0,0,1,0,22.11,25.846,25.846,0,0,0,4.846-2.264L60.057,41Z" />
    <path d="M28.544,33.8a7.97,7.97,0,0,0-2.46,12.57l4.788-5.587Z" />
    <path d="M18,41a13.968,13.968,0,0,1,5-10.706,25.741,25.741,0,0,0-4.263,2.116L4.9,41l13.839,8.59A25.928,25.928,0,0,0,23,51.706,13.971,13.971,0,0,1,18,41Z" />
    <path d="M39.522,38.3a7.98,7.98,0,0,0-9.083-5.149l2.225,6.673Z" />
    <path d="M39.962,40.255l-5.967,1.326L38.312,45.9A7.953,7.953,0,0,0,40,41C40,40.749,39.985,40.5,39.962,40.255Z" />
    <path d="M32,29A12,12,0,1,0,44,41,12.013,12.013,0,0,0,32,29Zm0,22A10,10,0,1,1,42,41,10.011,10.011,0,0,1,32,51Z" />
    <path d="M20,23a1,1,0,0,0,.735-.321L32.123,10.342,43.4,18.8a1,1,0,0,0,1.181.013l5.876-4.2L50.02,16.8l1.96.392,1-5A1,1,0,0,0,52,11H47v2h2.28l-5.265,3.761L32.6,8.2a1,1,0,0,0-1.335.121L19.805,20.737l-6.309-3.6L12.5,18.868l7,4A.994.994,0,0,0,20,23Z" />
    <rect x="31" y="15" width="2" height="13" />
    <rect x="37" y="18" width="2" height="10" />
    <rect x="25" y="22" width="2" height="6" />
    <rect x="19" y="26" width="2" height="4" />
    <rect x="13" y="24" width="2" height="10" />
    <rect x="43" y="23" width="2" height="7" />
    <rect x="49" y="19" width="2" height="15" />
  </svg>
);

export default Icon;
