export const PIXEL_ID = 795890068897751;

export const eventList = {
  ViewContent: "ViewContent",
  AddToCart: "AddToCart",
};

export const pageView = (ReactPixel) => {
  if (!ReactPixel) return;
  ReactPixel.pageView();
};

export const event = (ReactPixel, name, options = {}) => {
  if (!ReactPixel) return;
  ReactPixel.track(name, options);
};

export const customEvent = (ReactPixel, name, options = {}) => {
  if (!ReactPixel) return;
  ReactPixel.trackCustom(name, options);
};

export const activateSoundTrack = (ReactPixel, video) => {
  customEvent(ReactPixel, "AtivarSon", video ? { video } : {});
};

export const viewVideoTrack = (ReactPixel, video) => {
  customEvent(ReactPixel, "VerVideo", video ? { video } : {});
};

export const viewCourseDetail = (ReactPixel, course) => {
  if (!course?.text) return;

  event(ReactPixel, eventList.ViewContent, {
    contents: [{ id: course.text.trim().replaceAll(" ", "_"), quantity: 1 }],
    content_type: "course",
    value: course.price || 0,
    currency: "BRL",
  });
};

export const addToCart = (ReactPixel, cart) => {
  if (!cart?.length) return;
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++)
    totalPrice += (cart[i].item?.price || 0) * cart[i].cant;
  event(ReactPixel, eventList.AddToCart, {
    contents: cart.map((ic) => {
      return {
        id: ic.item.text.trim().replaceAll(" ", "_"),
        quantity: ic.cant,
      };
    }),
    content_type: "course",
    value: totalPrice || 0,
    currency: "BRL",
  });
};

export const viewCart = (ReactPixel, cart) => {
  if (!cart?.length) return;
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++)
    totalPrice += (cart[i].item?.price || 0) * cart[i].cant;
  customEvent(ReactPixel, "ViuCarrinho", {
    contents: cart.map((ic) => {
      return {
        id: ic.item.text.trim().replaceAll(" ", "_"),
        quantity: ic.cant,
      };
    }),
    content_type: "course",
    value: totalPrice || 0,
    currency: "BRL",
  });
};

export const trackOpenEnroll = (ReactPixel, course) => {
  customEvent(ReactPixel, "Matricula", {
    contents: [{ id: course.text.trim().replaceAll(" ", "_"), quantity: 1 }],
    content_type: "course",
    value: course.price || 0,
    currency: "BRL",
  });
};
