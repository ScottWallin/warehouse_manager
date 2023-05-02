

const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'The Grinch',
  trackingNumber: '1324kjs',
  shape: 'round'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Tanjiro',
  trackingNumber: '1325sdk',
  shape: 'cylindrical',
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Gojo',
  trackingNumber: 'jffd147',
  shape: 'round',
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'Baymax',
  trackingNumber: 'acdc145',
  shape: 'triangular',
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Nifflers',
  trackingNumber: '4b2l0z',
  shape: 'round',
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Deku',
  trackingNumber: '8081baz',
  shape: 'triangular',
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Yor',
  trackingNumber: 'suz2367',
  shape: 'round',
}]

function drawPackagesByType(type) {
  console.log('works', type)

  if (type == 'heavy') {
    const heavyPackages = packages.filter(p => p.weight >= 5)
    return drawPackages(heavyPackages)
  }
  if (type == 'express') {
    const expressPackages = packages.filter(p => p.priorityLevel == 'express')
    return drawPackages(expressPackages)
  }
  if (type == 'fragile') {
    const fragilePackages = packages.filter(p => p.isFragile == true)
    return drawPackages(fragilePackages)
  }
  if (type == 'round') {
    const roundPackages = packages.filter(p => p.shape == 'round')
    return drawPackages(roundPackages)
  }
  // filter: return a new array of the items that match
}

function drawAllPackages() {
  drawPackages(packages)
}

function drawPackages(packages) {
  let template = ''
  for (let i = 0; i < packages.length; i++) {
    const package = packages[i];
    template += `
    <div class="col-10">
          <div class="card bg-dark text-white">
            ${package.to}
          </div>
        </div>
    `
  }
  let packageElem = document.getElementById('packages')
  if (packageElem != null) {
    packageElem.innerHTML = template
  }
}

// weight things
function handlePackageWeight() {
  const options = ['priorityLevel', 'isFragile', 'weight']
}

// drawPackages(packages)