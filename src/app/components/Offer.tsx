import { FaGift, FaPercentage } from "react-icons/fa";

export default function OffersPage() {
    return (
        <section>
            <div>
                <FaGift />
                <div>
                    <h3>3% Rewards Cashback</h3>
                    <p>
                        Earn unlimited 3% cashback on every purchase.{" "}
                        <a href="/rewards-conditions">Learn More</a>
                    </p>
                </div>
            </div>
            <div>
                <FaPercentage />
                <div>
                    <h3>0% Intro APR</h3>
                    <p>
                        Get 0% intro APR for 12 months.
                    </p>
                </div>
            </div>
        </section>
    );
}
