export const NAVIGATE = 'NAVIGATE';
export const BACK = 'BACK';

export const navigate = route => (
  {
    type: NAVIGATE,
    route
  }
);

export const goBack = () => ({
  type: BACK,
});