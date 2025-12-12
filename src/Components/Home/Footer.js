export default function Footer() {
  return (
    <>
      <div className="mb-10">
        <img
          className="mb-10"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
        ></img>
        <hr></hr>
        <div className="flex mt-10 items-center gap-7">
          <p className="ml-24 text-3xl font-bold">
            For better experience, download the Swiggy app now
          </p>
          <a
            target="_blank"
            href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920"
          >
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"></img>
          </a>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
          >
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"></img>
          </a>
        </div>
      </div>
    </>
  );
}
