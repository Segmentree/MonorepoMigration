import { ref } from 'vue';
import { TeamCardsListComponent } from '../../../../models';

export const useAFewPeopleFromTheTeam = (
  defaultVipSubtitle: string,
  cards: TeamCardsListComponent[]
) => {
  const seeMore = ref(false);

  let key = defaultVipSubtitle;
  let fistSubtitleFound = false;
  let firstSubtitle = defaultVipSubtitle;

  const emptyObj = {};
  emptyObj[defaultVipSubtitle] = [];

  const sections: any = [...cards].reduce((result, item) => {
    if (item.sectionSubtitle) {
      key = item.sectionSubtitle;
      result[key] = [];
    } else {
      result[key].push(item);
      if (!fistSubtitleFound) {
        firstSubtitle = key;
        fistSubtitleFound = true;
      }
    }
    return result;
  }, emptyObj);

  return { seeMore, sections, firstSubtitle };
};
