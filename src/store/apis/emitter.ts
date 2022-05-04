class Emitter {
    _events: any;
    
    constructor() {
        this._events = {};
    }

    on(event_name: string | number, callback: any) {
        if (!this._events[event_name]) this._events[event_name] = [];
        this._events[event_name].push(callback);
    }
    off(event_name: string | number, callback: any) {
        const events = this._events[event_name] || [];
        const index = events.indexOf(callback);
        events.splice(index, 1);
    }
    emit(event_name: string, data: string | boolean) {
        const events = this._events[event_name] || [];
        events.forEach((event: (arg0: any) => void) => {
            event(data);
        });
    }
}

export { Emitter };