import { IPuzzles } from "../types";

interface ISource {
  droppableId: string;
  index: number;
}
interface IDestination {
  droppableId: string;
  index: number;
}

export const smallScreen = "(max-width: 1140px)";
export const smallHeightSize = "(max-height: 620px)";

export const ZoovuName = "ZOOVU";

export function shuffle(array: IPuzzles) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export const move = (
  state: any,
  source: ISource,
  destination: IDestination
) => {
  let srcListClone = [...state[source.droppableId]];

  let destListClone =
    source.droppableId === destination.droppableId
      ? srcListClone
      : [...state[destination.droppableId]];

  const [movedElement] = srcListClone.splice(source.index, 1);

  if (movedElement) {
    destListClone.splice(destination.index, 0, movedElement);
  } else {
    destListClone.splice(destination.index, 0, ...srcListClone);
    srcListClone.splice(0, srcListClone.length);
  }

  return {
    ...{
      [destination.droppableId]: destListClone,
    },
    [source.droppableId]: srcListClone,
  };
};
