import getRandomInt from "@/helpers/getRandom";

export const incrementRandomInt = async ({ commit }) => {
  commit("setIsLadoing", true);
  const randomInt = await getRandomInt();
  commit("incrementBy", randomInt);
  commit("setIsLadoing", false);
};
