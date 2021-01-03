import { binding, given, then, when } from 'cucumber-tsflow';
import { assert } from 'chai';

@binding()
export class DepositSteps {
    private balance = 0.0;

    @given(/A bank account with starting balance of \$(\d*)/)
    public givenDepositAmountSetTo(amount: number){
        this.balance = Number(amount);
    }

    @when(/\$(\d*) is deposited/)
    public deposit(amount: number) {
        this.balance += Number(amount);
    }

    @then(/The bank account balance should be \$(\d*)/)
    public accountBalanceShouldEqual(expectedAmount: number){
        assert.equal(this.balance, expectedAmount)
    }
}