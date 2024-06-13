export type MainStackProps = {
  Home: undefined;
  Detail: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Detail: { movieId: string };
};

export type DetailScreenProps = {
  route: { params: { movieId: string } };
};
