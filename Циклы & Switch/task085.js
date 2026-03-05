class StateMachine {
    constructor() {
        this.state = 'idle';
    }
    transition(action) {
        switch (this.state) {
            case 'idle':
                if (action === 'load') this.state = 'loading';
                break;
            case 'loading':
                if (action === 'success') this.state = 'success';
                else if (action === 'error') this.state = 'error';
                break;
            case 'success':
            case 'error':
                if (action === 'reset') this.state = 'idle';
                break;
        }
        return this.state;
    }
}
const sm = new StateMachine();
console.log(sm.transition('load'));
