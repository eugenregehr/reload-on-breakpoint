class ReloadOnBreakpoint {

  currentScreen = Number;
  lastBreakpoint = [];
  minimum = 0;
  maximum = 99999

  constructor(breakpoints){
    this.breakpoints = breakpoints;
    this.sorted = this.breakpoints.sort(function(a, b) {
      return a - b;
    })
    this.first = this.sorted[0];
    this.last = this.sorted[this.sorted.length - 1] ?? this.maximum;
    this.between = this.breakpoints.length == 1 ? [] : this.sorted;

    if(this.breakpoints.length > 1){
      this.between.pop();
      this.between.shift();
    }
  }

  checkBreakpoints(between){
    if(window.innerWidth < this.first){
        this.currentScreen = this.minimum
    }
    if(window.innerWidth >= this.first && window.innerWidth <= between[0]){
        this.currentScreen = this.first
    }
    if(window.innerWidth > this.first && window.innerWidth < this.last){
      this.checkBreakpointsBetween(between);
    }
    if(window.innerWidth > this.last){
      this.currentScreen = this.last;
    }
    this.reloadOnChange();
  } 

  checkBreakpointsBetween(between){
    between.length > 0 && between.forEach((val, index) => {
      let nextPoint = between[index + 1] ?? this.last;
        if(window.innerWidth > val && window.innerWidth < nextPoint){
          this.currentScreen = val
        }
      })
    if(between.length == 0) this.currentScreen = this.first;
  }

  reloadOnChange(){
    this.lastBreakpoint.push(this.currentScreen);
    if(this.lastBreakpoint.length >= 3){
      this.lastBreakpoint.shift()
      if(this.lastBreakpoint[0] !== this.lastBreakpoint[1]) window.location.reload();
    };
  }

  mount(){
    this.checkBreakpoints(this.between)
    window.addEventListener('resize', () => this.checkBreakpoints(this.between))
  }
}

export default ReloadOnBreakpoint;