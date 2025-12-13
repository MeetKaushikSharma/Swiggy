export default function CheckoutCard({ value, totalBill }) {
  return (
    <>
      <div>
        <div className="flex justify-center relative top-5 right-60 m-5">
          <p className="text-2xl font-bold">{value?.name}</p>
          <p className="absolute right-8 font-semibold text-xl">
            ₹{value?.price / 100}
          </p>
        </div>
      </div>
    </>
  );
}
