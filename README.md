# React 19 useState Hook Bug

This repository demonstrates a bug encountered when using the `useState` hook in React 19.  The counter does not increment correctly after multiple clicks of the increment button. The issue seems to be related to how state updates are handled during rapid rendering. 

## Bug Description

The `useState` hook in the provided `MyComponent` fails to update correctly beyond the first increment. Clicking the button multiple times doesn't lead to the expected counter increase. 

## Solution

The solution provided uses the `useRef` hook to maintain a stable reference to the increment function and prevent unexpected behavior from rapid re-renders that can interfere with useState updates.