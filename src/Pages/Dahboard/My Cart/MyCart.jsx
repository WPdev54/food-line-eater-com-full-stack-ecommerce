import useCart from "../../../Hooks/useCart";
import SharedTitle from "../../../Shared/sharedTitle";
import Table from "./Table";

const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className="mt-6">
            <SharedTitle subtitle={"My Cart"} title={"WANNA ADD MORE"} />
            <div>
                <div className="md:gap-20 py-5 cart-sum text-center md:flex justify-evenly items-center">
                    <h3 className="text-3xl  mb-3 ">Total Cart:{cart.length}</h3>
                    <h3 className="text-3xl  mb-3 text-orange-400 space-x-2">Total Price: ${total}</h3>
                    <button className="button mx-auto flex justify-center btn btn-small bg-[#D1A054] text-white">PAY</button>
                </div>
            </div>
            <Table />
        </div>
    );
};

export default MyCart;