import React from "react";

class AccountItem extends React.Component {
    render() {
        const { type, accountId, amount } = this.props
        return (
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{`Argent Bank ${type} (${accountId})`}</h3>
                    <p className="account-amount">${amount}</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        )
    }
}

export default AccountItem;